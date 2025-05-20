// Redirect to Instagram on button click
document.getElementById('okayButton').addEventListener('click', () => {
    const instagramUrl = 'https://www.instagram.com/__harixx_._/?hl=en'; // Replace with your Instagram URL
    window.open(instagramUrl, '_blank');
  });
  
  // Tear drop drifting animation - create small tear elements drifting down transparently
  const body = document.body;
  function createFloatingTear() {
    const tear = document.createElement('div');
    tear.className = 'floating-tear';
  
    // Random horizontal start position between 5% to 95% viewport width
    tear.style.left = `${Math.random() * 90 + 5}vw`;
  
    // Random size between 6px and 12px
    const size = (Math.random() * 6) + 6;
    tear.style.width = `${size}px`;
    tear.style.height = `${size * 1.8}px`;
  
    // Random animation duration between 6s to 12s
    tear.style.animationDuration = `${Math.random() * 6 + 6}s`;
  
    // Random delay negative for stagger effect
    tear.style.animationDelay = `-${Math.random() * 12}s`;
  
    body.appendChild(tear);
  
    // Remove tear after animation ends to keep DOM clean
    tear.addEventListener('animationend', () => {
      tear.remove();
    });
  }
  
  // Generate a new floating tear every 800ms
  setInterval(createFloatingTear, 800);
  
  // Rain drops on full page background
  const rainContainer = document.querySelector('.rain');
  function createRainDrop() {
    const drop = document.createElement('div');
    drop.className = 'drop';
  
    drop.style.left = `${Math.random() * 100}vw`;
    drop.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
  
    rainContainer.appendChild(drop);
  
    drop.addEventListener('animationend', () => {
      drop.remove();
    });
  }
  setInterval(createRainDrop, 100);
  
  // Rain drops inside container
  const containerRain = document.querySelector('.container-rain');
  function createContainerRainDrop() {
    const drop = document.createElement('div');
    drop.className = 'container-drop';
  
    drop.style.left = `${Math.random() * 100}%`;
    // Vary duration between 1s and 2.5s for bigger effect
    drop.style.animationDuration = `${Math.random() * 1.5 + 1}s`;
  
    containerRain.appendChild(drop);
  
    drop.addEventListener('animationend', () => {
      drop.remove();
    });
  }
  // More density inside container for better visual presence
  setInterval(createContainerRainDrop, 75);
  