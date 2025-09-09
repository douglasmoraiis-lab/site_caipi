import fundo from '../assets/fundo.png';

const Home = () => (
  <div className="flex flex-col items-center justify-center p-8 text-center">
    <h2 className="text-5xl font-extrabold text-white mb-4">Bem-vindo à Caipirinha do DG</h2>
    <p className="text-lg text-gray-300 max-w-2xl">
      Descubra as melhores caipirinhas, feitas com a paixão e os sabores do Brasil.
    </p>
    <img
      src={fundo}
      alt="Caipirinha do DG"
      className="mt-8 rounded-xl shadow-lg w-full max-w-lg"
    />
  </div>
);

export default Home;
