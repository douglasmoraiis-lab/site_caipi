// src/pages/CheckoutPage.tsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'phosphor-react';
import type { CartItem } from '../types';

interface CheckoutPageProps {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  onOrderSuccess: () => void;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ cart, setCart, onOrderSuccess }) => {
  const [userData, setUserData] = useState({ nome: "", telefone: "", endereco: "" });
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => {
    const adicionaisTotal = (item.adicionais || []).reduce((adSum, ad) => adSum + ad.preco, 0);
    return sum + (item.preco + adicionaisTotal) * item.quantidade;
  }, 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/.test(userData.telefone)) {
      alert("Telefone inválido! Use o formato (99) 99999-9999.");
      return;
    }
    console.log("Pedido finalizado:", { cart, userData });
    setSuccess(true);
    setCart([]);
    onOrderSuccess();
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };
  
  if (success) {
    return (
      <div className="flex flex-col items-center justify-center text-center p-6 min-h-screen bg-gray-900 text-white">
        <CheckCircle size={60} className="text-lime-400 mb-4" />
        {/* ALTERAÇÃO RESPONSIVA: Tamanho do título ajustado */}
        <h1 className="text-2xl sm:text-3xl font-bold text-white">Pedido Confirmado!</h1>
        <p className="text-gray-400 mt-2 text-lg">Você receberá os detalhes no WhatsApp em instantes.</p>
        <p className="text-gray-500 mt-6">Redirecionando para a página inicial...</p>
      </div>
    );
  }

  if (cart.length === 0 && !success) {
    return (
        <div className="flex flex-col items-center justify-center text-center p-6 min-h-screen bg-gray-900 text-white">
            {/* ALTERAÇÃO RESPONSIVA: Tamanho do título ajustado */}
            <h1 className="text-2xl sm:text-3xl font-bold">Seu carrinho está vazio!</h1>
            <p className="text-gray-400 mt-2 text-lg">Adicione alguns itens antes de finalizar a compra.</p>
            <button onClick={() => navigate('/cardapio')} className="mt-6 py-3 px-6 rounded-lg bg-lime-500 hover:bg-lime-600 font-semibold">
                Voltar para o Cardápio
            </button>
        </div>
    )
  }

  return (
    <div className="bg-gray-900 min-h-screen text-white p-4 sm:p-8 flex justify-center items-center">
      <div className="w-full max-w-lg bg-gray-800 p-6 rounded-2xl shadow-2xl">
        <div className="flex items-center justify-between mb-6">
            <button onClick={() => navigate('/cardapio')} className="flex items-center gap-2 text-lime-400 hover:text-lime-300">
                <ArrowLeft size={20} />
                Voltar para o Cardápio
            </button>
        </div>
        {/* ALTERAÇÃO RESPONSIVA: Tamanho do título ajustado */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Quase lá!</h1>
        <p className="text-gray-400 mb-6">Preencha seus dados para concluir o pedido.</p>
        
        <div className="mb-6 p-4 border border-gray-700 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Resumo do Pedido</h2>
            <div className="flex justify-between items-center text-xl">
                <span>Total:</span>
                <span className="font-bold text-lime-400">R$ {total.toFixed(2)}</span>
            </div>
        </div>

        <form className="space-y-4" onSubmit={handleCheckoutSubmit}>
          <input type="text" name="nome" value={userData.nome} onChange={handleChange} placeholder="Seu nome completo" className="w-full p-3 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-lime-500" required />
          <input type="tel" name="telefone" value={userData.telefone} onChange={handleChange} placeholder="Telefone (WhatsApp)" className="w-full p-3 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-lime-500" required />
          <input type="text" name="endereco" value={userData.endereco} onChange={handleChange} placeholder="Endereço para entrega" className="w-full p-3 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-lime-500" required />
          <button type="submit" className="w-full py-3 mt-4 rounded-lg bg-lime-500 hover:bg-lime-600 text-white font-semibold shadow-md text-lg">
            Confirmar e Enviar Pedido
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;