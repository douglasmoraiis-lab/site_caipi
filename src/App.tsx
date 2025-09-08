// src/App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importa os componentes
import Navbar from './components/nav';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/contato';
import Cardapio from './pages/cardapio';
import Carrinho from './pages/carrinho';

// Defina a interface para o item do carrinho diretamente aqui ou em um arquivo de tipos separado
// Isso garante que todos os componentes saibam a estrutura do objeto
interface CartItem {
  nome: string;
  preco: number;
  quantidade: number;
}

const App: React.FC = () => {
  // Define o estado do carrinho com o tipo explícito 'CartItem[]'
  const [cart, setCart] = useState<CartItem[]>([]);

  return (
    <Router>
      <div className="bg-gray-900 text-gray-200 font-sans min-h-screen flex flex-col">
        {/* Passa o estado para o Navbar, se necessário */}
        <Navbar />
        <main className="flex-grow min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            {/* Passa a função 'setCart' tipada para o Cardapio */}
            <Route path="/cardapio" element={<Cardapio setCart={setCart} />} />
            {/* Passa o estado 'cart' e a função 'setCart' para o Carrinho */}
            <Route path="/carrinho" element={<Carrinho cart={cart} setCart={setCart} />} />
          </Routes>
        </main>
        <footer className="w-full py-8 text-center bg-gray-900 border-t border-gray-700">
          <p className="text-sm text-gray-400">© 2025 Caipirinha do DG. Todos os direitos reservados.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;