import React from "react";
import { ShoppingBagOpen, XCircle, Trash } from "phosphor-react";
import { AnimatePresence, motion } from "framer-motion";

// Nova interface para AdicionalItem (movida para cá para consistência)
interface AdicionalItem {
  nome: string;
  preco: number;
}

interface CartItem {
  nome: string;
  precoBase: number;
  precoTotalItem: number; // Preço total do item (caipirinha + adicionais)
  quantidade: number;
  adicionaisSelecionados?: AdicionalItem[];
}

interface CartSidebarProps {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({
  cart,
  setCart,
  isOpen,
  onClose,
}) => {
  const handleRemoveItem = (itemToRemove: CartItem) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.nome !== itemToRemove.nome)
    );
  };

  // Calcula o total somando precoTotalItem * quantidade de cada item
  const total = cart.reduce(
    (acc, item) => acc + item.precoTotalItem * item.quantidade,
    0
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            // Ajustes de responsividade: w-full em mobile, md:w-96 em desktop
            className="fixed right-0 top-0 h-full w-full md:w-96 bg-white shadow-lg z-50 p-6 flex flex-col font-sans"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center pb-4 border-b border-gray-200 mb-6">
              <div className="flex items-center gap-3 text-lime-600">
                <ShoppingBagOpen size={32} weight="light" />
                <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-orange-500">
                  Seu Carrinho
                </h2>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <XCircle size={28} weight="bold" />
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="text-center mt-10 flex-grow flex flex-col justify-center items-center">
                <p className="text-gray-600 mb-4 text-lg">
                  Seu carrinho está vazio.
                </p>
                <p className="text-gray-500 text-sm flex items-center gap-2">
                  <XCircle size={18} />
                  <span>Adicione uma caipirinha deliciosa!</span>
                </p>
              </div>
            ) : (
              <>
                <ul className="flex-grow space-y-4 overflow-y-auto pr-2">
                  {cart.map((item, index) => (
                    <li
                      key={index}
                      className="flex flex-col p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center justify-between w-full">
                        <div className="flex flex-col items-start">
                          <span className="text-lg font-semibold text-gray-800">
                            {item.nome}
                          </span>
                          <span className="text-gray-500 text-sm">
                            Qtd: {item.quantidade}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-orange-500 font-bold">
                            R${" "}
                            {item.precoTotalItem.toFixed(2).replace(".", ",")}
                          </span>
                          <button
                            onClick={() => handleRemoveItem(item)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <Trash size={20} />
                          </button>
                        </div>
                      </div>
                      {item.adicionaisSelecionados &&
                        item.adicionaisSelecionados.length > 0 && (
                          <div className="mt-2 text-sm text-gray-600 pl-4">
                            <p className="font-medium">Adicionais:</p>
                            <ul className="list-disc list-inside">
                              {item.adicionaisSelecionados.map(
                                (adicional, i) => (
                                  <li key={i}>
                                    {adicional.nome} (+R${" "}
                                    {adicional.preco
                                      .toFixed(2)
                                      .replace(".", ",")}
                                    )
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        )}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center font-bold text-xl mb-4">
                    <span>Total</span>
                    <span className="text-lime-600">
                      R$ {total.toFixed(2).replace(".", ",")}
                    </span>
                  </div>

                  <button className="w-full bg-orange-500 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-colors duration-300 hover:bg-orange-600">
                    Finalizar Compra
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
