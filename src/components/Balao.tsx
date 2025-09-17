// src/components/Balao.tsx
import React from "react";

interface BalaoProps {
  id: string;
  left: string;
  animationDuration: string;
  animationDelay: string;
  width: string;
  height: string;
  background: string;
}

const Balao: React.FC<BalaoProps> = ({
  left,
  animationDuration,
  animationDelay,
  width,
  height,
  background,
}) => {
  // A classe CSS DEVE ser "balao-item" para corresponder ao CSS
  return (
    <div
      className="balao-item"
      style={{
        left: left,
        animationDuration: animationDuration,
        animationDelay: animationDelay,
        width: width,
        height: height,
        background: background,
      }}
    />
  );
};

export default Balao;