import React from "react";
import Footer from "../components/shared/Footer";
import "./CommunityPage.css";
import { ArrowDown } from "lucide-react";


const CommunityPage = () => {
  return (
    <div className='community-page'>
      <div className="community-container">
        {/* Mission Section */}
        <h1 className="community-title">The OSK Community</h1>
        <p className="community-subtitle">
          At Open Source Kashmir (OSK), our mission is to build a
          community-driven initiative that empowers the people of Kashmir to
          code, collaborate, and contribute to open-source projects.
        </p>

        {/* How to Join/Benefits Section */}
        <section className="community-about">
          <h3>How to Get Involved</h3>

          <p>
            We welcome contributors of all skill levels and place a strong
            emphasis on awareness, mentorship, and collaboration. Being a part of the OSK community is the perfect opportunity to gain practical, hands-on experience in software collaboration.
          </p>

          <p>
            To get started, browse through <a href="">Contribution Ideas</a> on
            our GitHub and find something you feel comfortable contributing to.
          </p>

          {/* Call to Action Section */}
          <ol className="contribution">
            <li className="step">
              <div className="step-box">
                <span>Fork & Clone the Repo</span>
              </div>
              <ArrowDown className="arrow-down" />
            </li>
            <li className="step">
              <div className="step-box">
                <span>Create a New Branch</span>
              </div>
              <ArrowDown className="arrow-down" />
            </li>
            <li className="step">
              <div className="step-box">
                <span>Make Changes and Commit</span>
              </div>
              <ArrowDown className="arrow-down" />
            </li>
            <li className="step">
              <div className="step-box">
                <span>Push and Open a Pull Request (PR)</span>
              </div>
            </li>
          </ol>

        </section>

        <section className="get-started">
          <a
            href="https://github.com/Open-Source-Kashmir/osk"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Get Started
          </a>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default CommunityPage;
