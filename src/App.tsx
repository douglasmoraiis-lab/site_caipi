import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/nav";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/contato";
import Cardapio from "./pages/cardapio";
// Remova a importação de Carrinho, pois ele não será mais uma página
// import Carrinho from './pages/carrinho';

// Importa o novo componente CartSidebar
import CartSidebar from "./components/CarSideBar";

interface CartItem {
  nome: string;
  preco: number;
  quantidade: number;
}

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false); // Novo estado para controlar a visibilidade do sidebar

  const handleOpenCart = () => setIsCartOpen(true);
  const handleCloseCart = () => setIsCartOpen(false);

  return (
    <Router>
      <div className="bg-gray-900 text-gray-200 font-sans min-h-screen flex flex-col">
        <Navbar onOpenCart={handleOpenCart} cartItemCount={cart.length} />{" "}
        {/* Passa a função e a contagem de itens */}
        <main className="flex-grow min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            {/* Passa a função setCart E a função para abrir o carrinho para o Cardapio */}
            <Route
              path="/cardapio"
              element={
                <Cardapio setCart={setCart} onOpenCart={handleOpenCart} />
              }
            />
            {/* Remova a rota do carrinho, pois ele será um sidebar */}
            {/* <Route path="/carrinho" element={<Carrinho cart={cart} setCart={setCart} />} /> */}
          </Routes>
        </main>
        <footer className="w-full py-8 text-center bg-gray-900 border-t border-gray-700">
          <p className="text-sm text-gray-400">
            © 2025 Caipirinha do DG. Todos os direitos reservados.
          </p>
        </footer>
        {/* Renderiza o CartSidebar aqui */}
        <CartSidebar
          cart={cart}
          setCart={setCart}
          isOpen={isCartOpen}
          onClose={handleCloseCart}
        />
      </div>
    </Router>
  );
};

export default App;
