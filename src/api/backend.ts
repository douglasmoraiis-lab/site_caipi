// src/api/backend.ts
export async function getCaipirinhas() {
  const res = await fetch("http://localhost:3001/caipirinhas");
  if (!res.ok) throw new Error("Erro ao buscar caipirinhas");
  return res.json();
}

export async function getBatidas() {
  const res = await fetch("http://localhost:3001/batidas");
  if (!res.ok) throw new Error("Erro ao buscar batidas");
  return res.json();
}

export async function getAdicionais() {
  const res = await fetch("http://localhost:3001/adicionais");
  if (!res.ok) throw new Error("Erro ao buscar adicionais");
  return res.json();
}
