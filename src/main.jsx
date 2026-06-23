import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import '@/index.css'

// Inject canvas-based grain overlay for vintage texture
function injectGrain() {
  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.id = 'grain-overlay';
  canvas.width = size;
  canvas.height = size;
  canvas.style.backgroundRepeat = 'repeat';
  canvas.style.backgroundSize = `${size}px ${size}px`;

  const ctx = canvas.getContext('2d');
  const imageData = ctx.createImageData(size, size);
  for (let i = 0; i < imageData.data.length; i += 4) {
    const v = Math.random() * 255;
    imageData.data[i] = v;
    imageData.data[i + 1] = v;
    imageData.data[i + 2] = v;
    imageData.data[i + 3] = 255;
  }
  ctx.putImageData(imageData, 0, 0);

  // Convert canvas to data URL and use as background on a div
  const div = document.createElement('div');
  div.id = 'grain-overlay';
  div.style.backgroundImage = `url(${canvas.toDataURL()})`;
  div.style.backgroundRepeat = 'repeat';
  div.style.backgroundSize = `${size}px ${size}px`;
  document.body.appendChild(div);
}

injectGrain();

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)