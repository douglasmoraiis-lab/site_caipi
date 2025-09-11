import React, { useState } from "react";

const Contato: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica real de envio para API ou email

    setSuccess(true); // Exibe mensagem de sucesso
    setFormData({ nome: "", email: "", mensagem: "" }); // Limpa campos

    // Desaparece após 3 segundos
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gray-950 text-center px-6">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-black opacity-90" />

      {/* Conteúdo */}
      <div className="relative z-10 w-full max-w-3xl animate-fadeIn">
        <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-400 drop-shadow-lg mb-6">
          Entre em Contato
        </h2>
        <p className="text-lg md:text-xl text-gray-200 drop-shadow-md mb-6">
          Ficou com alguma dúvida, quer fazer um pedido ou reservar para o seu
          evento? Fale com a gente!
        </p>

        {/* Informações */}
        <div className="space-y-3 mb-10">
          <p className="text-xl font-semibold text-lime-400 drop-shadow-md">
            Email:{" "}
            <a
              href="mailto:contato@caipirinhadodg.com"
              className="underline hover:text-yellow-400 transition-colors"
            >
              contato@caipirinhadodg.com
            </a>
          </p>
          <p className="text-xl font-semibold text-lime-400 drop-shadow-md">
            Telefone:{" "}
            <a
              href="tel:+5511999999999"
              className="underline hover:text-yellow-400 transition-colors"
            >
              (11) 99999-9999
            </a>
          </p>
        </div>

        {/* Formulário */}
        <form
          className="bg-gray-900/80 p-6 rounded-2xl shadow-lg space-y-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="nome"
            placeholder="Seu nome"
            value={formData.nome}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-lime-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Seu email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-lime-500"
            required
          />
          <textarea
            name="mensagem"
            placeholder="Sua mensagem"
            rows={5}
            value={formData.mensagem}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-lime-500"
            required
          />
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-lime-500 hover:bg-lime-600 transition-colors text-white font-semibold shadow-md"
          >
            Enviar Mensagem
          </button>
        </form>

        {/* Mensagem de sucesso centralizada */}
        {success && (
          <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
            <div className="bg-green-500 text-white font-bold px-6 py-4 rounded-xl shadow-lg animate-fadeIn">
              Obrigado! Sua mensagem foi enviada com sucesso.
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contato;
