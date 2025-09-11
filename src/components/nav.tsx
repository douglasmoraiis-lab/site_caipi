import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCartSimple } from "phosphor-react";

interface NavbarProps {
  onOpenCart: () => void;
  cartItemCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenCart, cartItemCount }) => {
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/cardapio", label: "Cardápio" },
    { to: "/sobre", label: "Sobre" },
    { to: "/contato", label: "Contato" },
  ];

  return (
    <nav className="bg-black backdrop-blur-md px-6 py-4 shadow-lg sticky top-0 z-30 border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-yellow-400 text-2xl font-extrabold tracking-wide hover:text-lime-400 transition-colors"
        >
          Caipirinha do DG
        </Link>

        {/* Links */}
        <div className="flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? "text-lime-400"
                  : "text-gray-300 hover:text-lime-400"
              }`}
            >
              {link.label}
              {/* underline animado */}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 w-full bg-lime-400 transition-transform origin-left ${
                  location.pathname === link.to
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
          ))}

          {/* Carrinho */}
          <button
            onClick={onOpenCart}
            className="relative p-2 rounded-full bg-lime-500 hover:bg-lime-600 transition-all duration-200 text-white shadow-md hover:scale-105"
            aria-label="Abrir Carrinho"
          >
            <ShoppingCartSimple size={24} weight="bold" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
