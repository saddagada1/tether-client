"use client";

import { useLayoutEffect, useRef } from "react";
import p5 from "p5";
import { useIsClient } from "usehooks-ts";

const sketch = (p: p5, size: { width: number; height: number }) => {
  //     let particles = [];
  // const num = 1000;
  // const noiseScale = 0.01/2;
  //   p.setup = () => {
  //     p.createCanvas(size.width, size.height);
  //     for(let i = 0; i < num; i ++) {
  //         particles.push(p5.ElementcreateVector(random(width), random(height)));
  //       }
  //       // stroke(255);
  //       // For a cool effect try uncommenting this line
  //       // And comment out the background() line in draw
  //       stroke(0, 50);
  //       clear();
  //   };
  //   p.draw = () => {
  //     // your draw code here
  //   };
};

const FlowFields: React.FC = ({}) => {
  const canvas = useRef<HTMLDivElement>(null!);
  const isClient = useIsClient();

  useLayoutEffect(() => {
    const ctx = new p5(
      (p: p5) =>
        sketch(p, {
          width: canvas.current.offsetWidth,
          height: canvas.current.offsetHeight,
        }),
      canvas.current,
    );

    return () => {
      ctx.remove();
    };
  }, [isClient]);

  return <div className="absolute left-0 top-0 h-full w-full" ref={canvas} />;
};

export default FlowFields;
