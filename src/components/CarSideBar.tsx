import React, { useState } from "react";

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
  const [isCheckout, setIsCheckout] = useState(false);
  const [userData, setUserData] = useState({ nome: "", telefone: "", endereco: "" });
  const [success, setSuccess] = useState(false);

  const handleRemoveItem = (itemToRemove: CartItem) => {
    setCart((prev) => prev.filter((item) => item.nome !== itemToRemove.nome));
  };

  const handleUpdateQuantity = (itemToUpdate: CartItem, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveItem(itemToUpdate);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.nome === itemToUpdate.nome ? { ...item, quantidade: newQuantity } : item
      )
    );
  };

  const total = cart.reduce((sum, item) => sum + item.preco * item.quantidade, 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode enviar os dados para API ou email
    setSuccess(true);
    setCart([]);
    setUserData({ nome: "", telefone: "", endereco: "" });

    // Fecha checkout após 3 segundos
    setTimeout(() => {
      setSuccess(false);
      setIsCheckout(false);
      onClose();
    }, 3000);
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-gray-800 shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex justify-between items-center border-b border-gray-700 pb-4 mb-4">
          <h2 className="text-2xl font-bold text-white">{isCheckout ? "Finalizar Pedido" : "Seu Carrinho"}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            ✖
          </button>
        </div>

        <div className="flex-grow overflow-y-auto pr-2">
          {!isCheckout ? (
            cart.length === 0 ? (
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
            )
          ) : (
            <form className="space-y-4" onSubmit={handleCheckoutSubmit}>
              <input
                type="text"
                name="nome"
                value={userData.nome}
                onChange={handleChange}
                placeholder="Seu nome"
                className="w-full p-3 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-lime-500"
                required
              />
              <input
                type="tel"
                name="telefone"
                value={userData.telefone}
                onChange={handleChange}
                placeholder="Telefone"
                className="w-full p-3 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-lime-500"
                required
              />
              <input
                type="text"
                name="endereco"
                value={userData.endereco}
                onChange={handleChange}
                placeholder="Endereço"
                className="w-full p-3 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-lime-500"
                required
              />
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-lime-500 hover:bg-lime-600 text-white font-semibold shadow-md"
              >
                Confirmar Pedido
              </button>
            </form>
          )}
        </div>

        {!isCheckout && cart.length > 0 && (
          <div className="mt-4 border-t border-gray-700 pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-bold text-white">Total:</span>
              <span className="text-xl font-bold text-yellow-400">R${total.toFixed(2)}</span>
            </div>
            <button
              className="w-full bg-yellow-500 py-3 rounded-xl hover:bg-yellow-600 transition-colors"
              onClick={() => setIsCheckout(true)}
            >
              Finalizar Compra
            </button>
          </div>
        )}

        {success && (
          <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
            <div className="bg-green-500 text-white font-bold px-6 py-4 rounded-xl shadow-lg animate-fadeIn">
              Pedido realizado com sucesso!
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
