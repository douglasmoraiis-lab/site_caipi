import React, { useState } from "react";
// Importações de imagens (mantive as suas, mas observe as sugestões para adicionais)
//Caipirinhas
import caipiroskaM from "../assets/caipi_morango.png";
import Caipi_limao from "../assets/tradicional.png";
import Caipi_maracuja from "../assets/caipi_maracuja.png";
import Caipi_limao_manjericao from "../assets/caipi_limao_majericao.png";
import Caipi_caju from "../assets/caipi_caju.png";
import Caipi_uva from "../assets/caipi_uva.png";
import Caipi_abacaxi from "../assets/caipi_abacaxi.png";
import Caipi_kiwi from "../assets/caipi_kiwi.png";
import Caipi_framboesa from "../assets/caipi_framboesa.png";  
import Caipi_amora from "../assets/caipi_amora.png";
import Caipi_pessego from "../assets/caipi_pessego.png";
import Caipi_manga from "../assets/caipi_manga.png";


//Batidas
import batidaCoco from "../assets/batidaCoco.png";
import batidaChoco from "../assets/batida_choco.png";
import batidaMaracuja from "../assets/batida_marac.png";
import batidaAbacaxi from "../assets/batida_abacaxi.png";
import batidaMorang from "../assets/batida_moran.png";
import batidaAmendoim from "../assets/batida_amendo.png";
import batidaAbacaxiHort from "../assets/batidaAba_Hote.png";
import batidaLaranja from "../assets/batida_laranj.png";
import batidaUva from "../assets/batida_uva.png";
import batidaBananaAcai from "../assets/batida_bana_acai.png";
import batidaMaracujaLei from "../assets/batida_marac_leit.png";
import MorangocomLeiteCondensado from "../assets/batida_morango_conden.png";

// Sugestão: Imagens específicas para adicionais
import adicionalMorango from "../assets/adicional_morango.png"; 
import adicionalLimao from "../assets/adicional_limao.png"; 
import adicionalManjericao from "../assets/adicionao_manjericao.png"; 
import adicionalCachaca from "../assets/adicional_cachaça.png"; 
import adicionalKiwi from "../assets/adicional_kiwi.png";
import adicionalAbacaxi from "../assets/adicional_abacaxi.png";
import adicionalAmora from "../assets/adicional_amora.png";
import adicionalPessego from "../assets/adicional_pessego.png";


interface CartItem {
  nome: string;
  preco: number;
  quantidade: number;
}

type CategoryType = "caipirinhas" | "batidas" | "adicionais";

interface MenuItem {
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  categoria: CategoryType;
}

interface CardapioProps {
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  onOpenCart: () => void;
}

const menuItems: MenuItem[] = [
  // Caipirinhas
  {
    nome: "Caipirinha Tradicional",
    descricao: "Clássica e revigorante com limão Taiti e cachaça premium.",
    preco: 15,
    imagem: Caipi_limao,
    categoria: "caipirinhas",
  },
  {
    nome: "Caipiroska de Morango",
    descricao: "Morango fresco macerado, vodka de alta qualidade e um toque de limão.",
    preco: 18,
    imagem: caipiroskaM,
    categoria: "caipirinhas",
  },
  {
    nome: "Caipirinha de Maracujá",
    descricao: "A combinação perfeita entre o doce e o azedo do maracujá com cachaça.",
    preco: 17.5,
    imagem: Caipi_maracuja,
    categoria: "caipirinhas",
  },
  {
    nome: "Caipi Limão e Manjericão",
    descricao: "Explosão de frescor, limão e folhas de manjericão.",
    preco: 19,
    imagem: Caipi_limao_manjericao,
    categoria: "caipirinhas",
  },
  {
    nome: "Caipirinha de Caju",
    descricao: "Doce e suculento caju, uma versão tropical e deliciosa.",
    preco: 18,
    imagem: Caipi_caju,
    categoria: "caipirinhas",
  },
  {
    nome: "Caipirinha de Uva",
    descricao: "Uvas frescas maceradas, para um sabor suave e adocicado.",
    preco: 19.5,
    imagem: Caipi_uva,
    categoria: "caipirinhas",
  },
  {
    nome: "Caipirinha de Abacaxi com Hortelã",
    descricao: "Abacaxi fresco e folhas de hortelã para uma refrescância tropical.",
    preco: 18,
    imagem: Caipi_abacaxi,
    categoria: "caipirinhas",
  },
  {
    nome: "Caipirinha de Kiwi",
    descricao: "Kiwi macerado com cachaça, doce na medida certa e refrescante.",
    preco: 18.5,
    imagem: Caipi_kiwi,
    categoria: "caipirinhas",
  },
  {
    nome: "Caipirinha de Framboesa",
    descricao: "Framboesas frescas com cachaça, para um sabor frutado e marcante.",
    preco: 19,
    imagem: Caipi_framboesa,
    categoria: "caipirinhas",
  },
  {
    nome: "Caipirinha de Amora",
    descricao: "Amoras frescas maceradas, equilíbrio perfeito entre doce e azedo.",
    preco: 19,
    imagem: Caipi_amora,
    categoria: "caipirinhas",
  },
  {
    nome: "Caipirinha de Pêssego",
    descricao: "Pêssego suculento combinado com cachaça para uma caipirinha doce e aromática.",
    preco: 18.5,
    imagem: Caipi_pessego,
    categoria: "caipirinhas",
  },
  {
    nome: "Caipirinha de Manga",
    descricao: "Manga madura e doce, ideal para uma bebida tropical irresistível.",
    preco: 19,
    imagem: Caipi_manga,
    categoria: "caipirinhas",
  },

  // Batidas
  {
    nome: "Batida de Coco",
    descricao: "Cremosa e refrescante, com leite de coco e cachaça ou vodka.",
    preco: 22,
    imagem: batidaCoco,
    categoria: "batidas",
  },
  {
    nome: "Batida de Morango",
    descricao:
      "Cremosa e refrescante, com leite de morango e cachaça ou vodka.",
    preco: 22,
    imagem: batidaMorang,
    categoria: "batidas",
  },
  {
    nome: "Batida de Abacaxi",
    descricao:
      "Cremosa e refrescante, com leite de abacaxi e cachaça ou vodka.",
    preco: 22,
    imagem: batidaAbacaxi,
    categoria: "batidas",
  },
  {
    nome: "Batida de Chocolate",
    descricao:
      "Cremosa e refrescante, com leite de chocolate e cachaça ou vodka.",
    preco: 22,
    imagem: batidaChoco,
    categoria: "batidas",
  },
  {
    nome: "Batida de Maracujá",
    descricao: "Tropical e vibrante, perfeita para quem ama um toque azedinho.",
    preco: 21,
    imagem: batidaMaracuja,
    categoria: "batidas",
  },
  {
    nome: "Batida de Amendoim",
    descricao: "Cremosa e com sabor marcante de amendoim, uma delícia!.",
    preco: 23,
    imagem: batidaAmendoim,
    categoria: "batidas",
  },
  {
    nome: "Batida de Abaca/ e Hortelã",
    descricao: "Sabor exótico do abacaxi com o frescor da hortelã.",
    preco: 22.5,
    imagem: batidaAbacaxiHort,
    categoria: "batidas",
  },
  {
    nome: "Batida de Banana Açaí",
    descricao: "Sabor exótico da banana com o frescor do açaí.",
    preco: 22.5,
    imagem: batidaBananaAcai,
    categoria: "batidas",
  },
  {
    nome: "Batida de Uva",
    descricao: "Sabor exótico da uva com o frescor da hortelã.",
    preco: 22.5,
    imagem: batidaUva,
    categoria: "batidas",
  },
  {
    nome: "Batida de laranja",
    descricao: "Sabor exótico da laranja com o frescor da hortelã.",
    preco: 22.5,
    imagem: batidaLaranja,
    categoria: "batidas",
  },
  {
    nome: "Batida Morango Cremoso",
    descricao: "Sabor exótico do morango com o cremoso leite condensado.",
    preco: 22.5,
    imagem: MorangocomLeiteCondensado,
    categoria: "batidas",
  },
  {
    nome: "Batida Maracujá com Leite",
    descricao: "Sabor exótico do maracujá com o cremoso leite condensado.",
    preco: 22.5,
    imagem: batidaMaracujaLei,
    categoria: "batidas",
  },

  // Adicionais (usando as novas importações de imagens)
  {
    nome: "Adicional de Morango",
    descricao: "Porção extra de morangos frescos para sua bebida.",
    preco: 5,
    imagem: adicionalMorango,
    categoria: "adicionais",
  },
  {
    nome: "Adicional de Limão",
    descricao: "Mais rodelas de limão para intensificar o sabor.",
    preco: 3,
    imagem: adicionalLimao,
    categoria: "adicionais",
  },
  {
    nome: "Adicional de Manjericão",
    descricao: "Folhas extras de manjericão para um aroma ainda mais fresco.",
    preco: 4,
    imagem: adicionalManjericao,
    categoria: "adicionais",
  },
  {
    nome: "Shot de Cachaça Extra",
    descricao: "Um shot extra da nossa cachaça premium para um toque mais forte.",
    preco: 8,
    imagem: adicionalCachaca,
    categoria: "adicionais",
  },
    {
    nome: "Adicional de Kiwi",
    descricao: "Adicione um toque refrescante de kiwi à sua caipirinha.",
    preco: 5,
    imagem: adicionalKiwi, 
    categoria: "adicionais",
  },
  {
    nome: "Adicional de Morango",
    descricao: "Dê mais sabor com morangos frescos na sua caipirinha.",
    preco: 5,
    imagem: adicionalMorango,
    categoria: "adicionais",
  },
  {
    nome: "Adicional de Abacaxi",
    descricao: "Um toque tropical com pedaços de abacaxi delicioso na sua bebida.",
    preco: 5,
    imagem: adicionalAbacaxi,
    categoria: "adicionais",
  },
  {
    nome: "Adicional de Amora",
    descricao: "Adicione amoras frescas para um sabor único e frutado.",
    preco: 5,
    imagem: adicionalAmora,
    categoria: "adicionais",
  },
  {
  nome: "Adicional de Pêssego",
  descricao: "Adicione pedaços suculentos de pêssego para um sabor doce e refrescante.",
  preco: 5,
  imagem: adicionalPessego, 
  categoria: "adicionais",
},
];


const Cardapio: React.FC<CardapioProps> = ({ setCart, onOpenCart }) => {
  const [activeTab, setActiveTab] = useState<CategoryType>("caipirinhas");

  const handleAddToCart = (menuItem: MenuItem) => {
    setCart((prev: CartItem[]) => {
      const existing = prev.find((item) => item.nome === menuItem.nome);
      if (existing) {
        return prev.map((item) =>
          item.nome === menuItem.nome
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }
      return [...prev, { ...menuItem, quantidade: 1 }];
    });
    onOpenCart();
  };

  const categories: { id: CategoryType; name: string }[] = [
    { id: "caipirinhas", name: "Nossas Caipirinhas" },
    { id: "batidas", name: "Deliciosas Batidas" },
    { id: "adicionais", name: "Adicionais Saborosos" },
  ];

  return (
    <div className="p-6 md:p-12 bg-gray-900 min-h-screen">
      <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-16 text-center animate-fadeInSlow">
        Nosso Cardápio Exclusivo
      </h2>

      {/* Navegação por abas */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveTab(category.id)}
            className={`
        py-3 px-6 md:px-8 text-lg md:text-xl font-bold rounded-full transition-all duration-300 ease-in-out
        ${
          activeTab === category.id
            ? "bg-lime-600 text-white shadow-xl transform scale-105"
            : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
        }
      `}
            aria-current={activeTab === category.id ? "page" : undefined}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Conteúdo das abas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
        {menuItems
          .filter((item) => item.categoria === activeTab)
          .map((item, i) => (
            <div
              key={item.nome + i}
              className="bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out border border-transparent hover:border-lime-500"
            >
              <img
                src={item.imagem}
                alt={item.nome}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-5 border-4 border-lime-600 shadow-md"
              />
              <h4 className="text-2xl font-bold text-white mb-2">
                {item.nome}
              </h4>
              <p className="text-md text-gray-400 mb-3 leading-relaxed">
                {item.descricao}
              </p>
              <p className="text-lime-400 font-extrabold text-xl mb-4">
                R${item.preco.toFixed(2)}
              </p>
              <button
                onClick={() => handleAddToCart(item)}
                className="mt-4 w-full bg-lime-600 hover:bg-lime-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-opacity-75"
              >
                Adicionar ao Carrinho
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Cardapio;
