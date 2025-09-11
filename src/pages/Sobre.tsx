import React from "react";
import { Sparkle, Handshake, Leaf } from "phosphor-react";
import fundo2 from "../assets/fundo2.png";

const Sobre: React.FC = () => {
  return (
    <section
      id="sobre"
      className="font-sans py-20 px-6 bg-gray-100 text-gray-800"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-orange-500 mb-4">
            Nossa Essência: Paixão em Cada Gota
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubra a história, o cuidado e a alma por trás da sua caipirinha
            perfeita.
          </p>
        </header>

        {/* Bloco principal: imagem + texto */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Imagem */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={fundo2}
              alt="Mãos preparando uma caipirinha vibrante"
              className="rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105"
            />
          </div>

          {/* Texto */}
          <div className="w-full md:w-1/2 text-gray-700">
            <h2 className="text-3xl font-bold text-orange-500 mb-4">
              De um Hobby Familiar à Arte da Caipirinha
            </h2>
            <p className="mb-4 text-lg leading-relaxed">
              O que floresceu de encontros calorosos em família e incontáveis
              elogios, hoje é a renomada Caipirinha do DG. De um passatempo
              despretensioso, emergiu uma paixão ardente por coquetéis vibrantes
              e refrescantes, culminando em uma missão clara: entregar a
              experiência mais autêntica e inesquecível com o ícone líquido do
              Brasil.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              Nossa filosofia é pura e simples: excelência em cada detalhe.
              Desde a seleção rigorosa das melhores cachaças até o toque fresco
              e aromático do manjericão colhido no ponto certo, cada ingrediente
              é escolhido a dedo. A magia acontece no preparo artesanal, onde o
              cuidado e a generosidade se unem para criar um copo que é pura
              perfeição.
            </p>
            <p className="text-lg leading-relaxed">
              Para nós, uma caipirinha transcende a bebida; é uma celebração de
              sabores, de conexões e da própria alegria de viver. 🍋✨ Convidamos
              você a se juntar a nós, explorar nosso menu e brindar a cada
              momento!
            </p>
          </div>
        </div>

        {/* Valores */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-lime-500 mb-12">
            Nossos Pilares
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="flex flex-col items-center p-6 rounded-lg bg-white shadow-lg border-t-4 border-lime-500 hover:shadow-xl transition-shadow duration-300 text-center">
              <Sparkle
                size={52}
                weight="fill"
                className="text-lime-500 mb-4 animate-pulse"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Qualidade Inquestionável
              </h3>
              <p className="text-gray-600 text-base">
                Comprometemo-nos com a excelência, utilizando apenas ingredientes
                premium para garantir um sabor e aroma verdadeiramente inesquecível.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center p-6 rounded-lg bg-white shadow-lg border-t-4 border-orange-500 hover:shadow-xl transition-shadow duration-300 text-center">
              <Handshake
                size={52}
                weight="fill"
                className="text-orange-500 mb-4 animate-bounce-slow"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Paixão Contagiante
              </h3>
              <p className="text-gray-600 text-base">
                Cada caipirinha é uma obra de arte criada com dedicação e amor,
                refletindo o nosso compromisso inabalável com a perfeição.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center p-6 rounded-lg bg-white shadow-lg border-t-4 border-lime-500 hover:shadow-xl transition-shadow duration-300 text-center">
              <Leaf
                size={52}
                weight="fill"
                className="text-lime-500 mb-4 animate-spin-slow"
              />
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
