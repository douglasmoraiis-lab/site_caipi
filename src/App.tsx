import React, { useState } from "react";
import Cardapio from "./pages/cardapio";
import Contato from "./pages/contato";
import Sobre from "./components/sobreC";
import Home from "./pages/Home";
import CartSidebar from "./components/CarSideBar";

interface CartItem {
  nome: string;
  preco: number;
  quantidade: number;
}

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Função para navegar e fechar o menu mobile
  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false); 
  };

  const renderPage = () => {
    switch (currentPage) {
      case "sobre":
        return <Sobre />;
      case "contato":
        return <Contato />;
      case "cardapio":
        return <Cardapio setCart={setCart} onOpenCart={() => setIsCartOpen(true)} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="bg-black text-gray-200 min-h-screen flex flex-col">
      {/* Navbar com responsividade */}
      {/* Adicionado z-50 para a navbar para garantir que ela esteja sempre no topo */}
      <nav className="p-4 flex items-center justify-between bg-black border-b border-gray-800 relative z-50">
        <h1 className="text-2xl font-bold cursor-pointer" onClick={() => handleNavigate("home")}>
          Caipirinha do DG
        </h1>
        {/* Botão para menu mobile (apenas em telas pequenas) */}
        <div className="sm:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
            )}
          </button>
        </div>
        {/* Links de navegação (escondidos em telas pequenas) */}
        <div className="hidden sm:flex space-x-4">
          <button onClick={() => handleNavigate("home")}>Home</button>
          <button onClick={() => handleNavigate("sobre")}>Sobre</button>
          <button onClick={() => handleNavigate("contato")}>Contato</button>
          <button onClick={() => handleNavigate("cardapio")}>Cardápio</button>
          <button onClick={() => setIsCartOpen(true)}>Carrinho ({cart.length})</button>
        </div>
      </nav>

      {/* Menu mobile (agora com a função `handleNavigate`) */}
      {/* Adicionado z-40 ao menu mobile para ficar abaixo da navbar mas acima do conteúdo */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black border-b border-gray-800 flex flex-col items-center sm:hidden z-40">
          <button className="py-2 w-full text-center" onClick={() => handleNavigate("home")}>Home</button>
          <button className="py-2 w-full text-center" onClick={() => handleNavigate("sobre")}>Sobre</button>
          <button className="py-2 w-full text-center" onClick={() => handleNavigate("contato")}>Contato</button>
          <button className="py-2 w-full text-center" onClick={() => handleNavigate("cardapio")}>Cardápio</button>
          <button 
            className="py-2 w-full text-center" 
            onClick={() => { 
              setIsCartOpen(true); 
              setIsMobileMenuOpen(false); 
            }}
          >
            Carrinho ({cart.length})
          </button>
        </div>
      )}

      <main className="flex-grow">{renderPage()}</main>

      <footer className="p-4 bg-black text-center">© 2025 Caipirinha do DG</footer>

      <CartSidebar cart={cart} setCart={setCart} isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default App;