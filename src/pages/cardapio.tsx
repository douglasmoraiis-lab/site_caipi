// src/pages/cardapio.tsx
import React from "react";
import Morango from "../assets/caipi_morango.png";
import Maracuja from "../assets/caipi_maracuja.png";
import Manjericao from "../assets/caipi_limao_majericao.png";
import tradicional from "../assets/tradicional.png";
import { CurrencyDollar, Plus, Star, Barbell, CheckCircle, ShoppingCartSimple } from "phosphor-react";
import { useNavigate } from 'react-router-dom';

// Define a estrutura de um item de caipirinha
interface Caipirinha {
  nome: string;
  descricao: string;
  ingredientes: string[];
  preco: number;
  imagem: string;
}

// Define a estrutura de um item no carrinho
interface CartItem {
  nome: string;
  preco: number;
  quantidade: number;
}

// Define o tipo da prop que o componente Cardapio recebe
interface CardapioProps {
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

// Dados das caipirinhas
const caipirinhas: Caipirinha[] = [
  {
    nome: "Caipirinha Tradicional",
    descricao:
      "A clássica caipirinha com cachaça, limão, açúcar e gelo. Simples e deliciosa.",
    ingredientes: ["Cachaça", "Limão Taiti", "Açúcar", "Gelo"],
    preco: 15.0,
    imagem: tradicional,
  },
  {
    nome: "Caipirinha de Morango",
    descricao:
      "A doçura do morango em perfeita harmonia com a cachaça e o limão. Um sabor inesquecível.",
    ingredientes: ["Cachaça", "Morango", "Limão Taiti", "Açúcar", "Gelo"],
    preco: 18.5,
    imagem: Morango,
  },
  {
    nome: "Caipirinha de Maracujá",
    descricao:
      "O toque tropical do maracujá para uma caipirinha com acidez e frescor na medida certa.",
    ingredientes: ["Cachaça", "Maracujá", "Limão Taiti", "Açúcar", "Gelo"],
    preco: 17.0,
    imagem: Maracuja,
  },
  {
    nome: "Caipirinha de Limão Siciliano com Manjericão",
    descricao:
      "Uma caipirinha sofisticada, com a acidez do limão siciliano e o aroma inconfundível do manjericão.",
    ingredientes: [
      "Cachaça",
      "Limão Siciliano",
      "Manjericão",
      "Açúcar",
      "Gelo",
    ],
    preco: 20.0,
    imagem: Manjericao,
  },
];

// Dados dos adicionais
const adicionais = [
  { nome: "Hortelã Extra", preco: 2.0, icon: "🌿" },
  { nome: "Pimenta", preco: 2.5, icon: "🌶️" },
  { nome: "Gengibre", preco: 3.0, icon: "🫚" },
  { nome: "Hortelã Pimenta", preco: 2.5, icon: "🍃" },
];

const monteSuaOpcoes = {
  bases: ["Cachaça", "Vodka", "Sake"],
  frutas: ["Limão Taiti", "Limão Siciliano", "Morango", "Maracujá", "Abacaxi", "Kiwi"],
  adicionais: ["Hortelã", "Pimenta", "Gengibre", "Ramos de Alecrim"],
};

const getIngredienteEmoji = (nome: string) => {
  if (nome.toLowerCase().includes("limão")) return "🍋";
  if (nome.toLowerCase().includes("maracujá")) return "🥭";
  if (nome.toLowerCase().includes("açúcar")) return "🍬";
  if (nome.toLowerCase().includes("gelo")) return "🧊";
  if (nome.toLowerCase().includes("morango")) return "🍓";
  if (nome.toLowerCase().includes("manjericão")) return "🌿";
  if (nome.toLowerCase().includes("cachaça")) return "🥃";
  return "✨";
};

const Cardapio: React.FC<CardapioProps> = ({ setCart }) => {
  const navigate = useNavigate();

  const handleSelectCaipirinha = (caipirinha: Caipirinha) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.nome === caipirinha.nome);
      if (existingItem) {
        return prevCart.map(item =>
          item.nome === caipirinha.nome
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...caipirinha, quantidade: 1 }];
      }
    });
    navigate('/carrinho');
  };

  return (
    <div className="font-sans max-w-4xl mx-auto p-6 bg-gray-100 text-gray-800 rounded-lg shadow-lg">
      <header className="text-center mb-10 pb-6 border-b-2 border-orange-500">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-orange-500 mb-2">
          Nosso Cardápio de Caipirinhas
        </h1>
        <p className="text-lg text-gray-600">
          As melhores caipirinhas, preparadas com ingredientes frescos e muito carinho.
        </p>
      </header>

      {/* Seção de Caipirinhas */}
      <section className="flex flex-col gap-10">
        {caipirinhas.map((caipirinha, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
          >
            <div className="w-full md:w-1/3 flex-shrink-0">
              <img
                src={caipirinha.imagem}
                alt={caipirinha.nome}
                className="w-full h-48 object-cover object-center md:h-full"
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center w-full md:w-2/3">
              <h2 className="text-2xl font-bold text-lime-600 mb-2">{caipirinha.nome}</h2>
              <p className="text-gray-600 text-sm md:text-base mb-4">{caipirinha.descricao}</p>
              <ul className="flex flex-wrap gap-2 mb-4">
                {caipirinha.ingredientes.map((ingrediente, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-1 bg-lime-100 text-lime-700 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    <span role="img" aria-label={ingrediente.toLowerCase()}>{getIngredienteEmoji(ingrediente)}</span> {ingrediente}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2 text-xl font-bold text-orange-600">
                  <CurrencyDollar weight="bold" size={24} />
                  <span>R$ {caipirinha.preco.toFixed(2).replace(".", ",")}</span>
                </div>
                <button
                  onClick={() => handleSelectCaipirinha(caipirinha)}
                  className="flex items-center gap-2 bg-orange-500 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-colors duration-300 hover:bg-orange-600"
                >
                  <ShoppingCartSimple weight="bold" size={20} />
                  Selecionar
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Seção de Adicionais */}
      <section className="mt-16">
        <h2 className="text-3xl font-extrabold text-center text-orange-500 mb-6">
          Adicionais
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {adicionais.map((adicional, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <span className="text-4xl mb-2">{adicional.icon}</span>
              <h3 className="text-lg font-bold text-gray-700 mb-1">{adicional.nome}</h3>
              <p className="text-sm text-gray-500">
                <Plus size={16} className="inline-block mr-1" />
                <CurrencyDollar size={16} weight="bold" className="inline-block" />
                <span> {adicional.preco.toFixed(2).replace(".", ",")}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Seção "Monte a Sua" */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-lime-400 mb-4">
          Monte a Sua Caipirinha!
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
          Escolha sua base, fruta e adicionais para criar a sua combinação perfeita!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {/* Bases */}
          <div>
            <h3 className="flex items-center gap-2 text-xl font-bold text-lime-600 mb-4">
              <Barbell size={24} /> Bases
            </h3>
            <ul className="space-y-2">
              {monteSuaOpcoes.bases.map((base, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle size={20} weight="fill" className="text-lime-500" />
                  {base}
                </li>
              ))}
            </ul>
          </div>
          {/* Frutas */}
          <div>
            <h3 className="flex items-center gap-2 text-xl font-bold text-lime-600 mb-4">
              <Star size={24} /> Frutas
            </h3>
            <ul className="space-y-2">
              {monteSuaOpcoes.frutas.map((fruta, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle size={20} weight="fill" className="text-lime-500" />
                  {fruta}
                </li>
              ))}
            </ul>
          </div>
          {/* Adicionais */}
          <div>
            <h3 className="flex items-center gap-2 text-xl font-bold text-lime-600 mb-4">
              <Plus size={24} /> Adicionais
            </h3>
            <ul className="space-y-2">
              {monteSuaOpcoes.adicionais.map((adicional, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle size={20} weight="fill" className="text-lime-500" />
                  {adicional}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <footer className="text-center mt-12 pt-6 border-t-2 border-orange-500 italic text-gray-500">
        <p>Experimente a sua preferida e brinde a vida!</p>
      </footer>
    </div>
  );
};

export default Cardapio;