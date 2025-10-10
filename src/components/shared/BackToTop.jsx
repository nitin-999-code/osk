import React, { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(
      typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );

    const scEl = document.scrollingElement || document.documentElement;
    const getScrollTop = () => (scEl && scEl.scrollTop) || window.scrollY || 0;

    const onScroll = () => setVisible(getScrollTop() > 300);

    if (scEl && scEl.addEventListener) scEl.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      if (scEl && scEl.removeEventListener) scEl.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollToTop = () => {
    const scEl = document.scrollingElement || document.documentElement;
    if (scEl && scEl.scrollTo) scEl.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    else window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  const size = 56;
  const baseStyle = {
    position: "fixed",
    right: 22,
    bottom: 28,
    width: size,
    height: size,
    borderRadius: size / 2,
    border: "none",
    background: "linear-gradient(180deg,#37a6ff 0%, #0b5fff 100%)",
    color: "#fff",
    boxShadow: "0 8px 30px rgba(11,95,255,0.24), 0 2px 6px rgba(2,6,23,0.12)",
    cursor: "pointer",
    display: "grid",
    placeItems: "center",
    fontSize: 20,
    lineHeight: 1,
    transform: visible ? (hover ? "translateY(0) scale(1.06)" : "translateY(0) scale(1)") : "translateY(8px) scale(0.96)",
    opacity: visible ? 1 : 0,
    transition: reduceMotion ? "none" : "opacity .22s ease, transform .18s cubic-bezier(.2,.9,.2,1)",
    zIndex: 99999,
    pointerEvents: visible ? "auto" : "none",
    outline: "none"
  };

  const tooltipStyle = {
    position: "fixed",
    right: 22 + (size - 48) / 2, // roughly align center
    bottom: 28 + size + 10,
    transform: hover ? "translateY(0)" : "translateY(6px)",
    opacity: hover ? 1 : 0,
    transition: reduceMotion ? "none" : "opacity .18s ease, transform .18s ease",
    background: "rgba(15,18,25,0.9)",
    color: "#fff",
    padding: "6px 10px",
    borderRadius: 8,
    fontSize: 13,
    boxShadow: "0 6px 18px rgba(2,6,23,0.28)",
    zIndex: 99998,
    pointerEvents: "none",
    whiteSpace: "nowrap"
  };

  return (
    <>
      {/* tooltip */}
      <div style={tooltipStyle} aria-hidden={!hover}>
        Back to top
      </div>

      <button
        type="button"
        aria-label="Back to top"
        aria-hidden={!visible}
        onClick={scrollToTop}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onFocus={() => setHover(true)}
        onBlur={() => setHover(false)}
        style={baseStyle}
      >
        {/* SVG arrow (bigger, crisp) */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M12 5v14" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 12l7-7 7 7" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </>
  );
}