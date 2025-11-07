// src/App.tsx

import React, { useState, useCallback } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import type { CartItem, Adicional } from "./types";

// Componentes e Páginas
import Home from "./pages/Home";
import Cardapio from "./pages/cardapio";
import Contato from "./pages/contato";
import Sobre from "./components/sobreC";
import CheckoutPage from "./pages/CheckoutPage"; // 1. Importe a nova página

import Navbar from "./components/nav";
import CartSidebar from "./components/CarSideBar";
import WhatsAppCard from "./components/WhatsAppCard";
import BaloesConfetes from "./components/BaloesConfetes";

const AppContent: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showParty, setShowParty] = useState(false);
  const [modifyingItemId, setModifyingItemId] = useState<string | null>(null);
  const navigate = useNavigate();
  const ListaProdutos: React.FC = () => <ListaProdutos />;


  const handlePartyEnd = useCallback(() => setShowParty(false), []);
  const handleOrderSuccess = useCallback(() => setShowParty(true), []);

  const handleRequestAdditional = useCallback(
    (item: CartItem) => {
      setModifyingItemId(item.id);
      setIsCartOpen(false);
      navigate("/cardapio");
    },
    [navigate]
  );

  const handleAddAdicionalToCart = useCallback(
    (adicional: Adicional) => {
      if (!modifyingItemId) return;
      setCart((currentCart) =>
        currentCart.map((item) =>
          item.id === modifyingItemId
            ? { ...item, adicionais: [...(item.adicionais || []), adicional] }
            : item
        )
      );
      setModifyingItemId(null);
      setIsCartOpen(true);
    },
    [modifyingItemId]
  );

  // 2. CRIE A FUNÇÃO DE NAVEGAÇÃO PARA O CHECKOUT
  const handleGoToCheckout = useCallback(() => {
    setIsCartOpen(false); // Fecha o carrinho
    navigate("/checkout"); // Navega para a página de checkout
  }, [navigate]);

  return (
    <div className="bg-black text-gray-200 min-h-screen flex flex-col">
      <Navbar
        onOpenCart={() => setIsCartOpen(true)}
        cartItemCount={cart.reduce((acc, item) => acc + item.quantidade, 0)}
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
                modifyingItemId={modifyingItemId}
                onAddAdicional={handleAddAdicionalToCart}
              />
            }
          />
          {/* 3. ADICIONE A ROTA PARA A PÁGINA DE CHECKOUT */}
          <Route
            path="/checkout"
            element={
              <CheckoutPage
                cart={cart}
                setCart={setCart}
                onOrderSuccess={handleOrderSuccess}
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
        onAddAdditionalRequest={handleRequestAdditional}
        onGoToCheckout={handleGoToCheckout} // 4. PASSE A NOVA FUNÇÃO PARA O CARRINHO
      />
      <BaloesConfetes showParty={showParty} onPartyEnd={handlePartyEnd} />
      
    </div>
  );
};

const App: React.FC = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);

export default App;
