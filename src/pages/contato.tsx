import React from 'react';

const Contato: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-lime-600 to-lime-800 p-8 md:p-12 rounded-lg shadow-xl text-white max-w-2xl mx-auto my-10">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center animate-fadeInDown">
        Fale Conosco
      </h2>
      <p className="text-lg md:text-xl mb-8 text-center leading-relaxed animate-fadeInUp">
        Adoraríamos saber de você! Seja para tornar seu evento inesquecível ou explorar parcerias saborosas, entre em contato.
      </p>

      <div className="space-y-6">
        <div className="flex items-center justify-center p-4 bg-lime-700/50 rounded-md shadow-md animate-fadeInLeft">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 mr-3 text-lime-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 13h9a2 2 0 002-2V7a2 2 0 00-2-2H3a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-xl font-medium">Email: <a href="mailto:contato@caipirinhadodg.com" className="underline hover:text-lime-200 transition-colors">contato@caipirinhadodg.com</a></span>
        </div>

        <div className="flex items-center justify-center p-4 bg-lime-700/50 rounded-md shadow-md animate-fadeInRight">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 mr-3 text-lime-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span className="text-xl font-medium">Telefone: <a href="tel:+5511999999999" className="underline hover:text-lime-200 transition-colors">(11) 99999-9999</a></span>
        </div>
      </div>
    </div>
  );
};

export default Contato;