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

  const renderPage = () => {
    switch (currentPage) {
      case "sobre": return <Sobre />;
      case "contato": return <Contato />;
      case "cardapio": return <Cardapio setCart={setCart} onOpenCart={() => setIsCartOpen(true)} />;
      default: return <Home />;
    }
  };

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen flex flex-col">
      {/* Navbar simples */}
      <nav className="p-4 flex justify-between bg-gray-800">
        <h1 className="text-2xl font-bold cursor-pointer" onClick={() => setCurrentPage("home")}>
          Caipirinha do DG
        </h1>
        <div className="space-x-4">
          <button onClick={() => setCurrentPage("home")}>Home</button>
          <button onClick={() => setCurrentPage("sobre")}>Sobre</button>
          <button onClick={() => setCurrentPage("contato")}>Contato</button>
          <button onClick={() => setCurrentPage("cardapio")}>Cardápio</button>
          <button onClick={() => setIsCartOpen(true)}>Carrinho ({cart.length})</button>
        </div>
      </nav>

      <main className="flex-grow">{renderPage()}</main>

      <footer className="p-4 bg-gray-800 text-center">© 2025 Caipirinha do DG</footer>

      <CartSidebar cart={cart} setCart={setCart} isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default App;
