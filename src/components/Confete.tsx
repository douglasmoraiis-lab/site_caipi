// src/components/Confete.tsx
import React from "react";

interface ConfeteProps {
  id: string;
  left: string;
  top: string;
  animationDuration: string;
  animationDelay: string;
  background: string;
  isRectangle: boolean;
  finalX: string;
  finalY: string;
  finalRotation: string;
}

const Confete: React.FC<ConfeteProps> = ({
  left,
  top,
  animationDuration,
  animationDelay,
  background,
  isRectangle,
  finalX,
  finalY,
  finalRotation,
}) => {
  return (
    <div
      className={`confete-item ${isRectangle ? "retangulo" : ""}`}
      style={
        {
          left: left,
          top: top,
          animationDuration: animationDuration,
          animationDelay: animationDelay,
          background: background,
          "--final-x": finalX,
          "--final-y": finalY,
          "--final-rotation": finalRotation,
        } as React.CSSProperties
      }
    />
  );
};

export default Confete;