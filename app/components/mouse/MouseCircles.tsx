"use client";
import React, { useEffect, useRef } from "react";
import "./mouse.css"; // Add styles for the circles

const colors = [
  "#ffb56b",
  "#fdaf69",
  "#f89d63",
  "#f59761",
  "#ef865e",
  "#ec805d",
  "#e36e5c",
  "#df685c",
  "#d5585c",
  "#d1525c",
  "#c5415d",
  "#c03b5d",
  "#b22c5e",
  "#ac265e",
  "#9c155f",
  "#950f5f",
  "#830060",
  "#7c0060",
  "#680060",
  "#60005f",
  "#48005f",
  "#3d005e",
];

const GlobalCircles: React.FC = () => {
  const coords = useRef({ x: 0, y: 0 });
  const circlesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      coords.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animateCircles = () => {
      let x = coords.current.x;
      let y = coords.current.y;

      circlesRef.current.forEach((circle, index) => {
        if (!circle) return;

        circle.style.left = `${x - 12}px`;
        circle.style.top = `${y - 12}px`;
        circle.style.transform = `scale(${
          (circlesRef.current.length - index) / circlesRef.current.length
        })`;

        const nextCircle =
          circlesRef.current[index + 1] || circlesRef.current[0];
        if (nextCircle) {
          x += (parseFloat(nextCircle.style.left || "0") - x) * 0.3;
          y += (parseFloat(nextCircle.style.top || "0") - y) * 0.3;
        }
      });

      requestAnimationFrame(animateCircles);
    };

    animateCircles();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      {Array.from({ length: 20 }).map((_, index) => (
        <div
          key={index}
          className="circle"
          ref={(el) => {
            if (el) circlesRef.current[index] = el;
          }}
          style={{ backgroundColor: colors[index % colors.length] }}
        ></div>
      ))}
    </div>
  );
};

export default GlobalCircles;
