import { useState } from 'react';
import { NavLink } from "react-router-dom";
import { List, X } from 'phosphor-react';

const links = [
  { to: "/", text: "Home" },
  { to: "/cardapio", text: "Cardápio" },
  { to: "/sobre", text: "Sobre" },
  { to: "/contato", text: "Contato" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const activeLinkClasses = "text-lime-400 font-bold border-b-2 border-lime-400";
  const inactiveLinkClasses = "hover:text-lime-200 transition-all duration-300";

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-700 text-white p-4 shadow-xl">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold flex items-center">
          <NavLink to="/" className="flex items-center gap-2">
            <span className="text-lime-400">🍹 Caipirinha</span>
            <span className="text-orange-500">do DG</span>
          </NavLink>
        </h1>

        {/* Links de navegação */}
        <ul className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive ? activeLinkClasses : inactiveLinkClasses
                }
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Menu Hamburguer para mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? <X size={32} /> : <List size={32} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col items-center gap-6 mt-4">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? `${activeLinkClasses} block py-2` : `${inactiveLinkClasses} block py-2`
                }
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}