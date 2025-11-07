export async function getProdutos() {
  const response = await fetch("http://localhost:5000/api/produtos");
  if (!response.ok) {
    throw new Error("Erro ao buscar produtos");
  }
  return await response.json();
}
