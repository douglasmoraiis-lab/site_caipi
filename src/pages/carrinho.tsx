// src/pages/carrinho.tsx
import React from 'react';
import { ShoppingBagOpen, XCircle, Trash } from 'phosphor-react';

// Define a estrutura de um item no carrinho
interface CartItem {
  nome: string;
  preco: number;
  quantidade: number;
}

// Define o tipo das props que o componente Carrinho recebe
interface CarrinhoProps {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const Carrinho: React.FC<CarrinhoProps> = ({ cart, setCart }) => {
    const handleRemoveItem = (itemToRemove: CartItem) => {
        setCart(prevCart => prevCart.filter(item => item.nome !== itemToRemove.nome));
    };

    const total = cart.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

    return (
        <div className="font-sans min-h-screen bg-gray-100 p-8 flex flex-col items-center">
            <div className="max-w-xl w-full bg-white rounded-xl shadow-lg p-6">
                <div className="flex justify-center items-center gap-4 text-lime-500 mb-4">
                    <ShoppingBagOpen size={64} weight="light" />
                    <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-orange-500">
                        Seu Carrinho
                    </h1>
                </div>

                {cart.length === 0 ? (
                    <div className="text-center mt-6">
                        <p className="text-gray-600 mb-6">
                            Seu carrinho está vazio. Adicione uma caipirinha deliciosa para começar!
                        </p>
                        <div className="mt-8 text-gray-400 flex items-center justify-center gap-2">
                            <XCircle size={20} />
                            <span>Os itens selecionados aparecerão aqui em breve.</span>
                        </div>
                    </div>
                ) : (
                    <>
                        <ul className="space-y-4">
                            {cart.map((item, index) => (
                                <li key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                    <div className="flex flex-col items-start">
                                        <span className="text-lg font-semibold">{item.nome}</span>
                                        <span className="text-gray-500 text-sm">Quantidade: {item.quantidade}</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-orange-500 font-bold">R$ {(item.preco * item.quantidade).toFixed(2).replace(".", ",")}</span>
                                        <button onClick={() => handleRemoveItem(item)} className="text-gray-400 hover:text-red-500 transition-colors">
                                            <Trash size={24} />
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200 font-bold text-xl">
                            <span>Total</span>
                            <span className="text-lime-500">R$ {total.toFixed(2).replace(".", ",")}</span>
                        </div>

                        <button className="mt-6 w-full bg-orange-500 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-colors duration-300 hover:bg-orange-600">
                            Finalizar Compra
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Carrinho;