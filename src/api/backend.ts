// src/api/backend.ts
export const API_BASE_URL = "http://localhost:3001"; // 🔹 Backend local

// Buscar produtos
export const getProdutos = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/produtos`);
    if (!response.ok) {
      throw new Error("Erro ao buscar produtos");
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return [];
  }
};

// Enviar pedido
export const enviarPedido = async (pedido: any) => {
  try {
    const response = await fetch(`${API_BASE_URL}/pedidos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pedido),
    });

    if (!response.ok) throw new Error("Erro ao enviar pedido");
    return await response.json();
  } catch (error) {
    console.error("Erro ao enviar pedido:", error);
    throw error;
  }
};
