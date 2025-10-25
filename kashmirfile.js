<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Living Orb Animation</title>
<style>
  body {
    margin: 0; 
    height: 100vh;
    background: radial-gradient(circle at center, #0f2027, #203a43, #2c5364);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: none;
  }

  .orb {
    position: absolute;
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, #00ffff, #0077ff);
    border-radius: 50%;
    box-shadow: 0 0 30px 10px rgba(0, 255, 255, 0.5);
    animation: breathe 3s infinite ease-in-out;
  }

  @keyframes breathe {
    0%, 100% { transform: scale(1); opacity: 0.8; }
    50% { transform: scale(1.3); opacity: 1; }
  }
</style>
</head>
<body>

<div class="orb" id="orb"></div>

<script>
const orb = document.getElementById('orb');
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let orbX = mouseX;
let orbY = mouseY;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Smooth movement using lerp (linear interpolation)
function animate() {
  orbX += (mouseX - orbX) * 0.08;
  orbY += (mouseY - orbY) * 0.08;
  orb.style.left = orbX - 50 + 'px';
  orb.style.top = orbY - 50 + 'px';
  requestAnimationFrame(animate);
}

animate();
</script>

</body>
</html>
