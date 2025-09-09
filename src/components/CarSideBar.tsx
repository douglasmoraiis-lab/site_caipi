import React from "react";

interface CartItem {
  nome: string;
  preco: number;
  quantidade: number;
}

interface CartSidebarProps {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ cart, setCart, isOpen, onClose }) => {
  const handleRemoveItem = (itemToRemove: CartItem) => {
    setCart((prevCart) => prevCart.filter((item) => item.nome !== itemToRemove.nome));
  };

  const handleUpdateQuantity = (itemToUpdate: CartItem, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveItem(itemToUpdate);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.nome === itemToUpdate.nome ? { ...item, quantidade: newQuantity } : item
      )
    );
  };

  const total = cart.reduce((sum, item) => sum + item.preco * item.quantidade, 0);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-gray-800 shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex justify-between items-center border-b border-gray-700 pb-4 mb-4">
          <h2 className="text-2xl font-bold text-white">Seu Carrinho</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            ✖
          </button>
        </div>
        <div className="flex-grow overflow-y-auto pr-2">
          {cart.length === 0 ? (
            <p className="text-center text-gray-500">Seu carrinho está vazio.</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-700 rounded-lg p-3 mb-2">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">{item.nome}</h3>
                  <p className="text-sm text-gray-400">R${item.preco.toFixed(2)}</p>
                </div>
                <div className="flex items-center">
                  <button onClick={() => handleUpdateQuantity(item, item.quantidade - 1)}>-</button>
                  <span className="px-3">{item.quantidade}</span>
                  <button onClick={() => handleUpdateQuantity(item, item.quantidade + 1)}>+</button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="mt-4 border-t border-gray-700 pt-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-bold text-white">Total:</span>
            <span className="text-xl font-bold text-yellow-400">R${total.toFixed(2)}</span>
          </div>
          <button className="w-full bg-yellow-500 py-3 rounded-xl" disabled={cart.length === 0}>
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
