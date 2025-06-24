import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const Waves = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const phaseOffset = 3;

    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(p.windowWidth, 100).parent(canvasRef.current);
        p.noFill();
      };

      p.draw = () => {
        p.background(0);
        p.stroke(110);

        const waveOffset = p.frameCount * 0.01;

        // First wave (sin)
        p.beginShape();
        p.strokeWeight(2);
        for (let x = 0; x < p.width; x++) {
          const y = 45 * p.sin(p.TWO_PI * (x / 350) + waveOffset);
          p.vertex(x, p.height / 2 + y);
        }
        p.endShape();

        // Second wave (cos)
        p.beginShape();
        p.strokeWeight(1);
        for (let x = 0; x < p.width; x++) {
          const y = 17 * p.cos(p.TWO_PI * (x / 137) + waveOffset + phaseOffset);
          p.vertex(x, p.height / 2 + y);
        }
        p.endShape();

        // Third wave (cos)
        p.beginShape();
        p.strokeWeight(5);
        for (let x = 0; x < p.width; x++) {
          const y = 20 * p.cos(p.TWO_PI * (x / 200) + waveOffset);
          p.vertex(x, p.height / 2 + y);
        }
        p.endShape();
      };
    };

    const p5Instance = new p5(sketch);

    return () => {
      p5Instance.remove();
    };
  }, []);

  return <div ref={canvasRef} />;
};

export default Waves;