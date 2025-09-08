import React from 'react';
import Imagem_prin from '../assets/SLOGAM_PRIN.png';
const Sobre: React.FC = () => {
    return (
        <section id="sobre" className="py-20 px-6">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <img src={Imagem_prin} 
                         alt="Processo de preparação" 
                         className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300" />
                </div>
                <div>
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">Nossa História</h2>
                    <p className="text-lg leading-relaxed">Na Caipirinha do DG, tradição e inovação se encontram em perfeita harmonia. Tudo começou com a paixão de criar a caipirinha ideal, e desde então temos aperfeiçoado nossas receitas para proporcionar uma experiência única. Utilizamos apenas cachaças premium, limões frescos e ingredientes cuidadosamente selecionados, garantindo que cada gole seja uma verdadeira celebração do autêntico sabor brasileiro..</p>
                </div>
            </div>
        </section>
    );
};

export default Sobre;
