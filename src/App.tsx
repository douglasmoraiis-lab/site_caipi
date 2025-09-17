// src/App.tsx
import React, { useState, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Componentes da sua aplicação
import Cardapio from "./pages/cardapio";
import Contato from "./pages/contato";
import Sobre from "./components/sobreC";
import Home from "./pages/Home";
import CartSidebar from "./components/CarSideBar";
import Navbar from "./components/nav";
import WhatsAppCard from "./components/WhatsAppCard";
import BaloesConfetes from "./components/BaloesConfetes"; // Importe BaloesConfetes

interface CartItem {
  nome: string;
  preco: number;
  quantidade: number;
}

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showParty, setShowParty] = useState(false); // Estado para controlar a festa

  // Função para lidar com o fim da animação de festa
  const handlePartyEnd = useCallback(() => {
    console.log("A animação de festa terminou! 🎉");
    setShowParty(false); // Reseta o estado para que possa ser disparada novamente
  }, []);

  // Função que será chamada pelo CartSidebar quando o pedido for bem-sucedido
  const handleOrderSuccess = useCallback(() => {
    setShowParty(true); // Dispara a festa!
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-black text-gray-200 min-h-screen flex flex-col">
        <Navbar
          onOpenCart={() => setIsCartOpen(true)}
          cartItemCount={cart.length}
        />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route
              path="/cardapio"
              element={
                <Cardapio
                  setCart={setCart}
                  onOpenCart={() => setIsCartOpen(true)}
                />
              }
            />
          </Routes>
          <WhatsAppCard />
        </main>

        <footer className="p-4 bg-black text-center">
          © 2025 Caipirinha do DG
        </footer>

        <CartSidebar
          cart={cart}
          setCart={setCart}
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          onOrderSuccess={handleOrderSuccess} // Nova prop para o CartSidebar
        />

        {/* Renderize BaloesConfetes aqui, controlando-o com o estado 'showParty' */}
        <BaloesConfetes showParty={showParty} onPartyEnd={handlePartyEnd} />
      </div>
    </BrowserRouter>
  );
};

export default App;