// src/components/BaloesConfetes.tsx
import React, { useEffect, useState, useCallback, useRef } from "react";
// PONTO CRÍTICO 1: A importação do componente do balão (singular)
import Balao from "./Balao";
import Confete from "./Confete";
// PONTO CRÍTICO 2: A importação do CSS. O caminho deve estar correto.
import "../styles/BaloesConfetes.css";

// --- Interfaces ---
interface BalaoData {
  id: string;
  left: string;
  animationDuration: string;
  animationDelay: string;
  width: string;
  height: string;
  background: string;
}

interface ConfeteData {
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

interface BaloesConfetesProps {
  showParty: boolean;
  onPartyEnd?: () => void;
}
// --- Fim das Interfaces ---

// --- Função de Geração de Balão (com a correção de centralização) ---
const generateRandomBalao = (): BalaoData => {
  const leftPosition = `${Math.random() * 80 + 10}%`; // Gera posição entre 10% e 90%

  return {
    id: Math.random().toString(36).substring(2, 9),
    left: leftPosition,
    animationDuration: `${4 + Math.random() * 4}s`,
    animationDelay: `${Math.random() * 1.5}s`,
    width: `${20 + Math.random() * 30}px`,
    height: `${30 + Math.random() * 40}px`,
    background: `hsl(${Math.random() * 360}, 70%, 60%)`,
  };
};

// --- Função de Geração de Confete ---
const generateRandomConfete = (): ConfeteData => {
  const startX = `${Math.random() * 100}%`;
  const startY = `${Math.random() * -50 - 20}px`;
  const finalX = `${(Math.random() - 0.5) * 400}px`;
  const finalY = `${window.innerHeight + 100}px`;
  const finalRotation = `${Math.random() * 1080 - 540}deg`;

  return {
    id: Math.random().toString(36).substring(2, 9),
    left: startX,
    top: startY,
    animationDuration: `${3 + Math.random() * 3}s`,
    animationDelay: `${Math.random() * 4}s`,
    background: `hsl(${Math.random() * 360}, 80%, 70%)`,
    isRectangle: Math.random() > 0.6,
    finalX: finalX,
    finalY: finalY,
    finalRotation: finalRotation,
  };
};

const BaloesConfetes: React.FC<BaloesConfetesProps> = ({ showParty, onPartyEnd }) => {
  const [activeBaloes, setActiveBaloes] = useState<BalaoData[]>([]);
  const [activeConfetes, setActiveConfetes] = useState<ConfeteData[]>([]);
  const partyTimeoutRef = useRef<number | null>(null);

  const NUM_BALOES = 15;
  const NUM_CONFETES = 120;
  const PARTY_DURATION = 8000;

  const startParty = useCallback(() => {
    if (partyTimeoutRef.current) clearTimeout(partyTimeoutRef.current);
    const newBaloes = Array.from({ length: NUM_BALOES }).map(generateRandomBalao);
    const newConfetes = Array.from({ length: NUM_CONFETES }).map(generateRandomConfete);
    setActiveBaloes(newBaloes);
    setActiveConfetes(newConfetes);

    partyTimeoutRef.current = setTimeout(() => {
      setActiveBaloes([]);
      setActiveConfetes([]);
      if (onPartyEnd) onPartyEnd();
    }, PARTY_DURATION);
  }, [NUM_BALOES, NUM_CONFETES, PARTY_DURATION, onPartyEnd]);

  useEffect(() => {
    if (showParty) {
      startParty();
    } else {
      if (partyTimeoutRef.current) {
        clearTimeout(partyTimeoutRef.current);
        setActiveBaloes([]);
        setActiveConfetes([]);
      }
    }
    return () => {
      if (partyTimeoutRef.current) clearTimeout(partyTimeoutRef.current);
    };
  }, [showParty, startParty]);

  if (!showParty && activeBaloes.length === 0 && activeConfetes.length === 0) {
    return null;
  }

  return (
    <div className="festa-container">
      {activeBaloes.map((balao) => (
        <Balao key={balao.id} {...balao} />
      ))}
      {activeConfetes.map((confete) => (
        <Confete key={confete.id} {...confete} />
      ))}
    </div>
  );
};

export default BaloesConfetes;