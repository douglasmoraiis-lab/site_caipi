import Button from '../components/button';
import Image from "../assets/fundo_4.png"
function Home() {
    return (
        <section className="relative w-full h-screen flex items-center justify-center text-center px-6">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{ backgroundImage: `url(${Image})` }}
            ></div>
            <div className="relative z-10">
                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter text-lime-400">A melhor Caipirinha da sua cidade</h1>
                <p className="mt-4 text-xl md:text-2xl font-light text-white">Feita com os melhores ingredientes para um sabor inesquecível.</p>
                <Button text="Veja nosso cardápio" href="/cardapio" />
            </div>
        </section>
    );
}

export default Home;
