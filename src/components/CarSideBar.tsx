import React from "react";
import type { CartItem } from "../types";
import { X } from "lucide-react";

interface Props {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  isOpen: boolean;
  onClose: () => void;
  onAddAdditionalRequest: (item: CartItem) => void;
  onGoToCheckout: () => void;
}

const CartSidebar: React.FC<Props> = ({
  cart,
  setCart,
  isOpen,
  onClose,
  onGoToCheckout,
}) => {
  const removeFromCart = (id: string | number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <aside
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-bold text-gray-800">Seu Carrinho</h2>
        <button onClick={onClose}>
          <X size={22} />
        </button>
      </div>

      <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-160px)]">
        {cart.length === 0 ? (
          <p className="text-gray-500 text-center mt-8">Carrinho vazio</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 border-b pb-3 last:border-none"
            >
              <img
                src={item.imagem}
                alt={item.nome}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{item.nome}</h3>
                <p className="text-sm text-gray-500">
                  {item.quantidade}x R$ {item.preco.toFixed(2)}
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div className="p-4 border-t flex flex-col gap-2">
          <button
            onClick={clearCart}
            className="bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl"
          >
            Limpar carrinho
          </button>
          <button
            onClick={onGoToCheckout}
            className="bg-green-500 hover:bg-green-600 text-white py-2 rounded-xl"
          >
            Finalizar Pedido
          </button>
        </div>
      )}
    </aside>
  );
};

export default CartSidebar;
