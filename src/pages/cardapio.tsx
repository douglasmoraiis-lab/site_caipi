import React, { useEffect, useState } from "react";
import { getProdutos } from "../api/backend";
import type { Produto, CartItem } from "../types";

interface CardapioProps {
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  onOpenCart: () => void;
  modifyingItemId: string | number | null;
  onAddAdicional: (adicional: any) => void;
}

const Cardapio: React.FC<CardapioProps> = ({ setCart, onOpenCart }) => {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const data = await getProdutos();
        setProdutos(data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };
    fetchProdutos();
  }, []);

  const handleAddToCart = (produto: Produto) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === produto.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }
      return [
        ...prevCart,
        {
          id: produto.id,
          nome: produto.nome,
          preco: produto.preco,
          quantidade: 1,
          imagem: produto.imagem,
          adicionais: [],
        },
      ];
    });
    onOpenCart();
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
  {produtos.map((produto) => (
    <div
      key={produto.id}
      className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden flex flex-col"
    >
      <img
        src={produto.imagem}
        alt={produto.nome}
        className="w-full h-40 object-cover"
        onError={(e) => (e.currentTarget.src = "/default-image.png")} // caso falhe
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{produto.nome}</h3>
        <p className="text-sm text-gray-500 flex-grow">{produto.descricao}</p>
        <p className="text-green-600 font-bold mt-2">
          R$ {produto.preco.toFixed(2)}
        </p>
        <button
          onClick={() => handleAddToCart(produto)}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 mt-4 rounded-xl flex justify-center items-center gap-2 transition-all"
        >
          🛒 Adicionar
        </button>
      </div>
    </div>
  ))}
</div>
  );
};

export default Cardapio;
