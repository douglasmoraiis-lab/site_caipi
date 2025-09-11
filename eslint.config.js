// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInSlow: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        // As keyframes para 'pulse', 'bounce' e 'spin' já são padrão do Tailwind.
        // Se você quiser customizá-las, pode adicionar suas versões aqui.
        // Exemplo (se quisesse mudar o padrão do spin):
        // customSpin: {
        //   'from': { transform: 'rotate(0deg)' },
        //   'to': { transform: 'rotate(360deg)' },
        // }
      },
      animation: {
        fadeInSlow: 'fadeInSlow 1.5s ease-out forwards',
        fadeIn: 'fadeIn 0.6s ease-out forwards',
        
        // Adicionando as novas animações para os ícones:
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite', // Pulsa mais lentamente
        'bounce-slow': 'bounce 2s infinite', // Pula mais lentamente
        'spin-slow': 'spin 5s linear infinite', // Gira mais lentamente
      },
    },
  },
  plugins: [],
};