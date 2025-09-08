import React from 'react';
import { Sparkle, Handshake, Leaf } from 'phosphor-react';

const Sobre: React.FC = () => {
    return (
        <section id="sobre" className="font-sans py-20 px-6 bg-gray-100 text-gray-800">
            <div className="container mx-auto max-w-4xl">
                <header className="text-center mb-12 pb-6 border-b-2 border-orange-500">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-orange-500 mb-2">
                        Nossa História
                    </h1>
                    <p className="text-lg text-gray-600">
                        Conheça o amor e a dedicação por trás de cada copo.
                    </p>
                </header>

                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Imagem (Você pode adicionar uma imagem aqui) */}
                    <div className="w-full md:w-1/2">
                        <img
                            src="https://via.placeholder.com/600x400.png?text=Caipirinha+do+DG"
                            alt="Equipe Caipirinha do DG"
                            className="rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105"
                        />
                    </div>

                    {/* Texto sobre a empresa */}
                    <div className="w-full md:w-1/2 text-gray-700">
                        <p className="mb-4 text-base leading-relaxed">
                            A **Caipirinha do DG** nasceu de uma paixão genuína por coquetéis frescos e saborosos. O que começou como um hobby, se transformou em uma missão: oferecer a melhor experiência com a bebida mais brasileira que existe.
                        </p>
                        <p className="mb-4 text-base leading-relaxed">
                            Nossa filosofia é simples: ingredientes de alta qualidade, preparo artesanal e muito carinho em cada copo. Valorizamos cada detalhe, desde a escolha da cachaça até o toque final do manjericão fresco.
                        </p>
                        <p className="text-base leading-relaxed">
                            Acreditamos que uma boa caipirinha é mais do que uma bebida, é uma celebração dos sabores e da vida. Venha nos visitar e brinde conosco a cada momento especial.
                        </p>
                    </div>
                </div>

                {/* Seção de Valores */}
                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-bold text-orange-500 mb-8">Nossos Valores</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center p-6 rounded-lg bg-white shadow-md">
                            <Sparkle size={48} weight="fill" className="text-lime-500 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Qualidade</h3>
                            <p className="text-gray-600 text-sm">Usamos apenas os melhores ingredientes para garantir um sabor inesquecível.</p>
                        </div>
                        <div className="flex flex-col items-center p-6 rounded-lg bg-white shadow-md">
                            <Handshake size={48} weight="fill" className="text-orange-500 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Paixão</h3>
                            <p className="text-gray-600 text-sm">Cada caipirinha é feita com dedicação e amor, refletindo nosso compromisso com a excelência.</p>
                        </div>
                        <div className="flex flex-col items-center p-6 rounded-lg bg-white shadow-md">
                            <Leaf size={48} weight="fill" className="text-lime-500 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Inovação</h3>
                            <p className="text-gray-600 text-sm">Sempre explorando novos sabores para surpreender e encantar nossos clientes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sobre;