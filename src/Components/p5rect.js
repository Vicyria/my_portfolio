import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const P5Sketch = () => {
  const canvasRef = useRef(null); // reference to the DOM element

  useEffect(() => {
    const distMouse = 50;
    let angle = 0; // Set initial angle

    const sketch = (p5) => {
      p5.setup = () => {
        p5.createCanvas(400, 400).parent(canvasRef.current); // Attach the canvas to the reference
        p5.rectMode(p5.CENTER);
        p5.angleMode(p5.DEGREES);
      };

      p5.draw = () => {
        p5.background(0);
        let distance = p5.dist(p5.mouseX, p5.mouseY, p5.width / 2, p5.height / 2);
        if (distance < distMouse) {
          angle += 1;
        }

        p5.translate(p5.width / 2, p5.height / 2);
        p5.rotate(angle);
        p5.rect(0, 0, 50, 50);
      };
    };

    // Ensure p5 instance is created only once
    const p5Instance = new p5(sketch);

    // Cleanup p5 instance when the component unmounts
    return () => {
      p5Instance.remove(); // Remove the canvas when the component is unmounted
    };
  }, []); // Empty dependency array ensures this runs only on mount/unmount

  return <div ref={canvasRef}></div>; // Reference the DOM element for p5 to attach the canvas
};

export default P5Sketch;