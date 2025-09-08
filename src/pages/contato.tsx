import React from 'react';
import { Phone, EnvelopeSimple, MapPin } from 'phosphor-react';

const Contato: React.FC = () => {
    return (
        <section id="contato" className="py-20 px-6 bg-gray-800 text-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-lime-400 to-orange-500 text-transparent bg-clip-text">
                    Entre em Contato
                </h2>
                <p className="text-lg mb-10 max-w-xl mx-auto text-gray-300">
                    Faça seu pedido ou tire suas dúvidas! Nossa equipe está pronta para atender você com o melhor da Caipirinha do DG.
                </p>

                <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
                    <a
                        href="tel:+5547996269792"
                        className="flex items-center space-x-3 text-xl font-semibold text-lime-400 hover:text-orange-500 transition-colors duration-300"
                    >
                        <Phone size={32} weight="fill" />
                        <span>(47) 99626-9792</span>
                    </a>
                    <a
                        href="mailto:contato@caipirinhadodg.com.br"
                        className="flex items-center space-x-3 text-xl font-semibold text-lime-400 hover:text-orange-500 transition-colors duration-300"
                    >
                        <EnvelopeSimple size={32} weight="fill" />
                        <span>contato@caipirinhadodg.com.br</span>
                    </a>
                    <a
                        href="https://goo.gl/maps/..." // Substitua pelo link do mapa
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-xl font-semibold text-lime-400 hover:text-orange-500 transition-colors duration-300"
                    >
                        <MapPin size={32} weight="fill" />
                        <span>Nosso Endereço</span>
                    </a>
                </div>

                <p className="mt-12 text-gray-500 text-sm max-w-md mx-auto">
                    Aproveite para nos seguir nas redes sociais e ficar por dentro das novidades!
                </p>
            </div>
        </section>
    );
};

export default Contato;