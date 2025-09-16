import React from "react";
import { Sparkle, Handshake, Leaf } from "phosphor-react"; // 'Cocktail' removido daqui
import fundo2 from "../assets/fundo2.png";

const Sobre: React.FC = () => {
  return (
    <section
      id="sobre"
      className="font-sans py-20 px-6 bg-gray-800 text-white"
    >
      <div className="container mx-auto max-w-4xl">
        <header className="text-center mb-12 pb-6 border-b-2 border-orange-500">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-orange-500 mb-2">
            Nossa Essência: Paixão em Cada Gota
          </h1>{" "}
          {/* Título mais convidativo */}
          <p className="text-lg text-white">
            Descubra a história, o cuidado e a alma por trás da sua caipirinha
            perfeita.
          </p>{" "}
          {/* Subtítulo mais poético */}
        </header>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Imagem */}
          <div className="w-full md:w-1/2 relative">
            {" "}
            {/* Adicionado relative para possíveis sobreposições */}
            <img
              src={fundo2}
              alt="Mãos preparando uma caipirinha vibrante"
              className="rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105"
            />
            {/* Você pode adicionar um overlay ou um selo aqui, se quiser */}
          </div>

          {/* Texto sobre a empresa */}
          <div className="w-full md:w-1/2 text-gray-700">
            <h2 className="text-3xl font-bold text-orange-500 mb-4">
              De um Hobby Familiar à Arte da Caipirinha
            </h2>{" "}
            {/* Título para o bloco de texto */}
            <p className="mb-4 text-lg leading-relaxed text-white">
              O que floresceu de encontros calorosos em família e incontáveis
              elogios, hoje é a renomada Caipirinha do DG. De um passatempo
              despretensioso, emergiu uma paixão ardente por coquetéis vibrantes
              e refrescantes, culminando em uma missão clara: entregar a
              experiência mais autêntica e inesquecível com o ícone líquido do
              Brasil.
            </p>
            <p className="mb-4 text-lg leading-relaxed text-white">
              Nossa filosofia é pura e simples: excelência em cada detalhe.
              Desde a seleção rigorosa das melhores cachaças até o toque fresco
              e aromático do manjericão colhido no ponto certo, cada ingrediente
              é escolhido a dedo. A magia acontece no preparo artesanal, onde o
              cuidado e a generosidade se unem para criar um copo que é pura
              perfeição.
            </p>
            <p className="text-lg leading-relaxed text-white">
              Para nós, uma caipirinha transcende a bebida; é uma celebração de
              sabores, de conexões e da própria alegria de viver. 🍋✨ Convidamos
              você a se juntar a nós, explorar nosso menu e brindar a cada
              momento!
            </p>{" "}
            {/* CTA mais integrado */}
          </div>
        </div>

        {/* Seção de Valores */}
        <div className="mt-20 text-center">
          {" "}
          {/* Margem superior aumentada */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-lime-500 mb-10">
            Nossos Pilares
          </h2>{" "}
          {/* Título mais forte para valores */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 rounded-lg bg-white shadow-lg border-t-4 border-lime-500 hover:shadow-xl transition-shadow duration-300">
              {" "}
              {/* Estilo de card melhorado */}
              <Sparkle
                size={52}
                weight="fill"
                className="text-lime-500 mb-4 animate-pulse"
              />{" "}
              {/* Ícone um pouco maior e com leve animação */}
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Qualidade Inquestionável
              </h3>{" "}
              {/* Texto mais forte */}
              <p className="text-gray-600 text-base ">
                Comprometemo-nos com a excelência, utilizando apenas
                ingredientes premium para garantir um sabor e aroma
                verdadeiramente inesquecível em cada gole.
              </p>{" "}
              {/* Texto mais descritivo */}
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg bg-white shadow-lg border-t-4 border-orange-500 hover:shadow-xl transition-shadow duration-300">
              <Handshake
                size={52}
                weight="fill"
                className="text-orange-500 mb-4 animate-bounce-slow"
              />{" "}
              {/* Ícone maior e animação suave */}
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Paixão Contagiante
              </h3>
              <p className="text-gray-600 text-base">
                Cada caipirinha é uma obra de arte criada com dedicação e amor,
                refletindo o nosso compromisso inabalável com a perfeição e a
                alegria de servir.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg bg-white shadow-lg border-t-4 border-lime-500 hover:shadow-xl transition-shadow duration-300">
              <Leaf
                size={52}
                weight="fill"
                className="text-lime-500 mb-4 animate-spin-slow"
              />{" "}
              {/* Ícone maior e animação suave */}
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Inovação Refrescante
              </h3>
              <p className="text-gray-600 text-base">
                Estamos em constante busca por novos horizontes de sabor,
                explorando combinações criativas para surpreender e encantar
                paladares, mantendo a essência da tradição.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;