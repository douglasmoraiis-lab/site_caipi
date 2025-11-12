import React, { useEffect, useState } from "react";
import { getCaipirinhas, getBatidas, getAdicionais } from "../api/backend";
import type { Produto, CartItem } from "../types";

interface CardapioProps {
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  onOpenCart: () => void;
  modifyingItemId: string | number | null;
  onAddAdicional: (adicional: any) => void;
}

const Cardapio: React.FC<CardapioProps> = ({ setCart, onOpenCart }) => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [categoriaAtiva, setCategoriaAtiva] = useState("Caipirinhas");

  useEffect(() => {
  const fetchProdutos = async () => {
    try {
      const [caip, bat, add] = await Promise.all([
        getCaipirinhas(),
        getBatidas(),
        getAdicionais(),
      ]);
      setProdutos([...caip, ...bat, ...add]);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };
  fetchProdutos();
}, []);


  const handleAddToCart = (produto: Produto) => {
    setCart(prev => {
      const item = prev.find(i => i.id === produto.id);
      if (item) {
        return prev.map(i =>
          i.id === produto.id ? { ...i, quantidade: i.quantidade + 1 } : i
        );
      }
      return [...prev, { ...produto, quantidade: 1, adicionais: [] }];
    });
    onOpenCart();
  };

  const categorias = ["Caipirinhas", "Batidas", "Adicionais"];

  const produtosFiltrados = produtos.filter(
    (p) => p.categoria === categoriaAtiva
  );

  return (
    <div className="p-6">
      {/* Abas */}
      <div className="flex justify-center mb-8 border-b border-gray-300">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaAtiva(cat)}
            className={`px-6 py-2 font-semibold text-lg transition-all border-b-4 ${
              categoriaAtiva === cat
                ? "border-yellow-400 text-yellow-500"
                : "border-transparent text-gray-600 hover:text-yellow-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Lista */}
      {produtosFiltrados.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {produtosFiltrados.map((produto) => (
            <div
              key={produto.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg overflow-hidden flex flex-col h-[340px]"
            >
              <img
                src={produto.imagem || "/images/default-image.png"}
                alt={produto.nome}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/images/default-image.png";
                }}
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {produto.nome}
                </h3>
                <p className="text-sm text-gray-500 flex-grow">
                  {produto.descricao}
                </p>
                <p className="text-green-600 font-bold mt-2">
                  R$ {produto.preco.toFixed(2)}
                </p>
                <button
                  onClick={() => handleAddToCart(produto)}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 mt-4 rounded-xl"
                >
                  🛒 Adicionar
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">
          Nenhum produto encontrado nesta categoria.
        </p>
      )}
    </div>
  );
};

export default Cardapio;
