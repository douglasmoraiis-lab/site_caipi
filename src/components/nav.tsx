import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

interface NavbarProps {
  onOpenCart: () => void;
  cartItemCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenCart }) => {
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

        {/* Links Section - Centered */}
        <div className="flex-1 flex justify-center items-center">
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
          </div>
        </div>

        {/* Carrinho */}
        <button
          onClick={onOpenCart}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-lime-500 hover:bg-lime-600 transition"
        >
          <ShoppingCart size={16} />
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
