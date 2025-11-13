import React, { useEffect, useState } from "react";

interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  categoria: string;
}

const ListaProdutos: React.FC = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    fetch("/data/batidas.json")
      .then((response) => response.json())
      .then(setProdutos)
      .catch(console.error);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {produtos.map((p) => (
        <div
          key={p.id}
          className="border border-gray-700 rounded-xl shadow p-3 flex flex-col items-center bg-zinc-900"
        >
          <img
            src={p.imagem}
            alt={p.nome}
            className="w-32 h-32 object-cover rounded-lg"
          />
          <h2 className="text-lg font-semibold mt-2">{p.nome}</h2>
          <p className="text-gray-400 text-sm">{p.descricao}</p>
          <span className="text-green-500 font-bold mt-1">
            R$ {p.preco.toFixed(2)}
          </span>
          <button className="mt-2 bg-green-600 hover:bg-green-700 text-white py-1 px-3 rounded">
            Adicionar
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListaProdutos;
