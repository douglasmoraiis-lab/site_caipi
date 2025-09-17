// src/components/nav.tsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// MUDANÇA: Importar ícones para o menu hambúrguer (List) e fechar (X)
import { ShoppingCart, List, X } from "phosphor-react";

interface NavbarProps {
  onOpenCart: () => void;
  cartItemCount: number; // Prop mantida, embora não usada no snippet
}

const Navbar: React.FC<NavbarProps> = ({ onOpenCart, cartItemCount }) => {
  const location = useLocation();
  // MUDANÇA: Adicionar estado para controlar a abertura do menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/sobre", label: "Sobre" },
    { to: "/cardapio", label: "Cardápio" },
    { to: "/contato", label: "Contato" },
  ];

  return (
    // MUDANÇA: Adicionado 'relative' para que o menu mobile possa ser posicionado em relação à navbar
    <nav className="relative bg-black backdrop-blur-md px-4 sm:px-6 py-4 shadow-lg top-0 z-30 border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-yellow-400 text-xl sm:text-2xl font-extrabold tracking-wide hover:text-lime-400 transition-colors"
        >
          Caipirinha do DG
        </Link>

        {/* Links Section (Desktop) */}
        {/* MUDANÇA: Esconder os links em telas pequenas (hidden) e mostrar em telas médias e maiores (md:flex) */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`group relative text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? "text-lime-400"
                  : "text-gray-300 hover:text-lime-400"
              }`}
            >
              {link.label}
              {/* underline animado */}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 w-full bg-lime-400 transform transition-transform origin-left ${
                  location.pathname === link.to
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Ícones da Direita (Carrinho e Menu Hambúrguer) */}
        <div className="flex items-center space-x-4">
          {/* Carrinho */}
          <button
            onClick={onOpenCart}
            className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-lime-600 transition-colors"
          >
            <ShoppingCart size={20} className="text-lime-400" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                {cartItemCount}
              </span>
            )}
          </button>

          {/* Botão do Menu Hambúrguer */}
          {/* MUDANÇA: Mostrar apenas em telas pequenas (md:hidden) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-lime-600 transition-colors text-lime-400"
          >
            {isMenuOpen ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      {/* MUDANÇA: Container para os links no mobile. Aparece/desaparece com base no estado 'isMenuOpen' */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black border-t border-gray-800 transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-4">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              // Ao clicar em um link, o menu fecha
              onClick={() => setIsMenuOpen(false)}
              className={`text-lg transition-colors ${
                location.pathname === link.to
                  ? "text-lime-400 font-semibold"
                  : "text-gray-300 hover:text-lime-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
