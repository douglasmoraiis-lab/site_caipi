// backend/server.js
import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Caminho absoluto
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const produtosPath = path.resolve(__dirname, "data", "produtos.json");

// ✅ Rota principal (teste rápido)
app.get("/", (req, res) => {
  res.send("🚀 Servidor backend ativo e rodando!");
});

// ✅ Rota de produtos
app.get("/produtos", (req, res) => {
  try {
    const data = fs.readFileSync(produtosPath, "utf-8");
    const produtos = JSON.parse(data);
    res.json(produtos);
  } catch (error) {
    console.error("❌ Erro ao ler produtos.json:", error);
    res.status(500).json({ error: "Erro ao ler produtos" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});
