// src/components/CarSideBar.tsx

import React from "react";
import { Trash, Minus, Plus, PlusCircle } from "phosphor-react"; 
import { motion, AnimatePresence } from "framer-motion";
import type { CartItem } from "../types";

interface CartSidebarProps {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  isOpen: boolean;
  onClose: () => void;
  onAddAdditionalRequest: (item: CartItem) => void; 
  onGoToCheckout: () => void; 
}

const CartSidebar: React.FC<CartSidebarProps> = ({
  cart,
  setCart,
  isOpen,
  onClose,
  onAddAdditionalRequest,
  onGoToCheckout,
}) => {

  const handleRemoveItem = (itemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId));
  };

  const handleUpdateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveItem(itemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, quantidade: newQuantity } : item))
    );
  };
  
  const calculateItemSubtotal = (item: CartItem) => {
    const adicionaisTotal = (item.adicionais || []).reduce((sum, ad) => sum + ad.preco, 0);
    return (item.preco + adicionaisTotal) * item.quantidade;
  };

  const total = cart.reduce((sum, item) => sum + calculateItemSubtotal(item), 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          // =====================================================================
          // ALTERAÇÃO RESPONSIVA: Ocupa a tela inteira no celular, 480px no desktop
          // =====================================================================
          className="fixed top-0 right-0 h-full w-full sm:w-[480px] bg-gray-900 shadow-2xl z-50 flex flex-col"
        >
          <div className="p-5 flex justify-between items-center border-b border-gray-700 flex-shrink-0">
            <h2 className="text-2xl font-bold text-white">Seu Carrinho</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">✖</button>
          </div>

          <div className="flex-grow overflow-y-auto px-5 py-4">
            {cart.length === 0 ? (
              <p className="text-center text-gray-500 mt-10">Seu carrinho está vazio.</p>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="bg-gray-800 rounded-lg p-3 mb-3 flex flex-col">
                  {/* ... O layout interno do item já é flexível e funciona bem ... */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img src={item.imageUrl || 'https://via.placeholder.com/100'} alt={item.nome} className="w-16 h-16 rounded-md object-cover"/>
                      <div>
                        <h3 className="text-md font-semibold text-white mb-2">{item.nome}</h3>
                        <div className="flex items-center bg-gray-700 rounded-full px-1 w-fit">
                          <button onClick={() => handleUpdateQuantity(item.id, item.quantidade - 1)} className="text-white text-xl p-1 w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-600"><Minus size={16} /></button>
                          <span className="px-3 text-white font-bold text-sm">{item.quantidade}</span>
                          <button onClick={() => handleUpdateQuantity(item.id, item.quantidade + 1)} className="text-white text-xl p-1 w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-600"><Plus size={16} /></button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-between h-full">
                      <button onClick={() => handleRemoveItem(item.id)} className="text-red-400 hover:text-red-500 transition-colors"><Trash size={20} /></button>
                      <p className="text-lg font-bold text-yellow-400 mt-4">R${calculateItemSubtotal(item).toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="mt-2 pt-2 border-t border-gray-700/50">
                    {item.adicionais && item.adicionais.length > 0 && (
                      <div className="space-y-1 mb-2">
                        {item.adicionais.map((ad, adIndex) => (
                          <div key={adIndex} className="flex justify-between items-center text-sm ml-4">
                            <p className="text-gray-300">+ {ad.nome}</p>
                            <p className="text-gray-400">R${ad.preco.toFixed(2)}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    <button onClick={() => onAddAdditionalRequest(item)} className="w-full text-left text-lime-400 hover:text-lime-500 text-sm flex items-center p-2 bg-gray-700/50 hover:bg-gray-700 rounded-lg transition-colors">
                      <PlusCircle size={20} className="mr-2"/>
                      Adicionar adicional
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div className="p-5 border-t border-gray-700 flex-shrink-0">
              <div className="flex justify-between items-center text-white font-semibold mb-3">
                <span className="text-lg">Total:</span>
                <span className="text-xl text-lime-400">R$ {total.toFixed(2)}</span>
              </div>
              <button onClick={onGoToCheckout} className="w-full py-3 rounded-lg bg-lime-500 hover:bg-lime-600 text-white font-semibold shadow-md">
                Finalizar Pedido
              </button>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;