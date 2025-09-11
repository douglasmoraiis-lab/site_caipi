import React from "react";
import fundo from "../assets/fundo.png";

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => (
  <div
    className="relative flex items-center justify-center min-h-screen bg-cover bg-center text-center px-6"
    style={{ backgroundImage: `url(${fundo})` }}
  >
    {/* Overlay escuro */}
    <div className="absolute inset-0 bg-black/60" />

    {/* Conteúdo */}
    <div className="relative z-10 max-w-3xl animate-fadeIn">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-lg mb-6">
        Bem-vindo à Caipirinha do DG
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-gray-200 drop-shadow-md mb-8 animate-fadeInSlow">
        Descubra as melhores caipirinhas, feitas com a paixão e os sabores do Brasil.
      </p>

      {/* Botão que troca a página */}
      <button
        onClick={() => onNavigate("cardapio")}
        className="inline-block px-6 py-3 rounded-full bg-lime-500 hover:bg-lime-600 text-white font-semibold shadow-lg transition-all animate-fadeIn"
      >
        Descubra novos sabores
      </button>
    </div>
  </div>
);

export default Home;