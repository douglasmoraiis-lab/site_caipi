// src/components/CartSidebar.tsx
import React from 'react';
import { X, Trash, ShoppingBagOpen } from 'phosphor-react';

// Interfaces de tipos para os dados
interface CartItem {
    nome: string;
    preco: number;
    quantidade: number;
}

interface CartSidebarProps {
    cart: CartItem[];
    setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
    isCartOpen: boolean;
    setIsCartOpen: (isOpen: boolean) => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ cart, setCart, isCartOpen, setIsCartOpen }) => {
    const handleRemoveItem = (itemToRemove: CartItem) => {
        setCart(prevCart => prevCart.filter(item => item.nome !== itemToRemove.nome));
    };

    const total = cart.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

    return (
        <div
            className={`fixed inset-y-0 right-0 w-full md:w-96 bg-gray-900 shadow-xl z-50 transform transition-transform duration-300 ease-in-out
            ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
            <div className="flex justify-between items-center p-6 border-b border-gray-700">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-orange-500">
                    Seu Carrinho
                </h2>
                <button onClick={() => setIsCartOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                    <X size={28} />
                </button>
            </div>

            <div className="p-6 flex-grow overflow-y-auto" style={{ maxHeight: 'calc(100vh - 150px)' }}>
                {cart.length === 0 ? (
                    <div className="text-center text-gray-400 mt-10">
                        <ShoppingBagOpen size={64} className="mx-auto mb-4" />
                        <p>O carrinho está vazio.</p>
                    </div>
                ) : (
                    <ul className="space-y-4">
                        {cart.map((item, index) => (
                            <li key={index} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg shadow">
                                <div className="flex flex-col">
                                    <span className="text-lg font-semibold text-white">{item.nome}</span>
                                    <span className="text-gray-400 text-sm">Qtd: {item.quantidade}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-orange-500 font-bold">R$ {(item.preco * item.quantidade).toFixed(2).replace(".", ",")}</span>
                                    <button onClick={() => handleRemoveItem(item)} className="text-gray-400 hover:text-red-500 transition-colors">
                                        <Trash size={20} />
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {cart.length > 0 && (
                <div className="absolute bottom-0 w-full p-6 border-t border-gray-700 bg-gray-900">
                    <div className="flex justify-between items-center text-xl font-bold mb-4">
                        <span>Total:</span>
                        <span className="text-lime-500">R$ {total.toFixed(2).replace(".", ",")}</span>
                    </div>
                    <button className="w-full bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition-colors">
                        Finalizar Compra
                    </button>
                </div>
            )}
        </div>
    );
};

export default CartSidebar;