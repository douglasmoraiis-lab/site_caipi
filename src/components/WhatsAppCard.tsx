// components/WhatsAppCard.tsx
import React from "react";
import {WhatsappLogo } from "phosphor-react";

const WhatsAppCard: React.FC = () => {
  return (
    <a
      href="https://wa.me/5547996269792"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
    >
      <WhatsappLogo size={32} color="white" />
    </a>
  );
};

export default WhatsAppCard;
