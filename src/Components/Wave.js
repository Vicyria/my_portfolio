// WaveSketch.js
import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const WaveSketch = () => {
  const canvasRef = useRef(null); // reference to the DOM element

  useEffect(() => {
    const phaseOffset = 3;
  
    const sketch = (p5) => {
      p5.setup = () => {
        p5.createCanvas(p5.windowWidth, 100).parent(canvasRef.current); // Attach the canvas to the reference
        p5.noFill();
      };

      p5.draw = () => {
        p5.background(0);
        p5.stroke(110);

        let waveOffset = p5.frameCount * 0.01;  // Animate the wave

        // First wave (sin wave)
        p5.beginShape();
        p5.strokeWeight(2);
        for (let x = 0; x < p5.width; x++) {
          let y = 45 * p5.sin(p5.TWO_PI * (x / 350) + waveOffset);
          p5.vertex(x, p5.height / 2 + y);
        }
        p5.endShape();

        p5.beginShape();
        p5.strokeWeight(1);
        for (let x = 0; x < p5.width; x++) {
          let y = 17 * p5.cos(p5.TWO_PI * (x / 137) + waveOffset + phaseOffset);
          p5.vertex(x, p5.height / 2 + y);
        }
        p5.endShape();

        // Third wave (cos wave)
        p5.beginShape();
        p5.strokeWeight(5);
        for (let x = 0; x < p5.width; x++) {
          let y = 20 * p5.cos(p5.TWO_PI * (x / 200) + waveOffset);
          p5.vertex(x, p5.height / 2 + y);
        }
        p5.endShape();
        
      };
    };

    const p5Instance = new p5(sketch);

    // Cleanup p5 instance when the component unmounts
    return () => {
      p5Instance.remove();
    };
  }, []); // Empty dependency array ensures this runs only on mount/unmount

  return <div ref={canvasRef}></div>; // Reference the DOM element for p5 to attach the canvas
};

export default WaveSketch;