import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartSimple } from 'phosphor-react'; // Importa o ícone

// Adicione as props para abrir o carrinho e exibir a contagem de itens
interface NavbarProps {
  onOpenCart: () => void;
  cartItemCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenCart, cartItemCount }) => { // Recebe as props
  return (
    <nav className="bg-gray-800 p-4 shadow-md sticky top-0 z-30">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo ou Nome do Site */}
        <Link to="/" className="text-white text-2xl font-bold hover:text-lime-400 transition-colors">
          Caipirinha do DG
        </Link>

        {/* Links de Navegação */}
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-gray-300 hover:text-lime-400 transition-colors">
            Home
          </Link>
          <Link to="/cardapio" className="text-gray-300 hover:text-lime-400 transition-colors">
            Cardápio
          </Link>
          <Link to="/sobre" className="text-gray-300 hover:text-lime-400 transition-colors">
            Sobre
          </Link>
          <Link to="/contato" className="text-gray-300 hover:text-lime-400 transition-colors">
            Contato
          </Link>

          {/* Botão do Carrinho */}
          <button 
            onClick={onOpenCart} 
            className="relative p-2 rounded-full bg-lime-500 hover:bg-lime-600 transition-colors text-white"
            aria-label="Abrir Carrinho"
          >
            <ShoppingCartSimple size={24} weight="bold" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
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