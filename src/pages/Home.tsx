// src/pages/Home.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import fundo from "../assets/fundo.png";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center text-center px-4 sm:px-6" // MUDANÇA: Padding base menor
      style={{ backgroundImage: `url(${fundo})` }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-3xl animate-fadeIn">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-yellow-400 drop-shadow-lg mb-4 sm:mb-6">
          {/* MUDANÇA: Escala de fontes mais granular */}
          Bem-vindo à Caipirinha do DG
        </h2>
        <p className="text-base md:text-lg text-gray-200 drop-shadow-md mb-8 animate-fadeInSlow">
          {/* MUDANÇA: Simplificado para dois tamanhos */}
          Descubra as melhores caipirinhas, feitas com a paixão e os sabores do
          Brasil.
        </p>

        {/* Botão que navega para /cardapio */}
        <button
          onClick={() => navigate("/cardapio")}
          className="inline-block px-8 py-3 rounded-full bg-lime-500 hover:bg-lime-600 text-white font-semibold shadow-lg transition-transform hover:scale-105"
        >
          {/* MUDANÇA: Aumentei um pouco o padding e adicionei efeito de escala no hover */}
          Descubra novos sabores
        </button>
      </div>
    </div>
  );
};

export default Home;
