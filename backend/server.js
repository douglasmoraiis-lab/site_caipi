import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Corrige __dirname para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// ✅ Habilita CORS para o frontend (Vite)
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET"],
  allowedHeaders: ["Content-Type"],
}));

app.use(express.json());

// ✅ Caminhos corretos (usa path.resolve para não quebrar)
const dataDir = path.resolve(__dirname, "data");
const caipirinhasPath = path.join(dataDir, "caipirinhas.json");
const batidasPath = path.join(dataDir, "batidas.json");
const adicionaisPath = path.join(dataDir, "adicionais.json");

app.get("/caipirinhas", (req, res) => {
  const data = JSON.parse(fs.readFileSync(caipirinhasPath, "utf-8"));
  res.json(data);
});

app.get("/batidas", (req, res) => {
  const data = JSON.parse(fs.readFileSync(batidasPath, "utf-8"));
  res.json(data);
});

app.get("/adicionais", (req, res) => {
  const data = JSON.parse(fs.readFileSync(adicionaisPath, "utf-8"));
  res.json(data);
});

app.listen(3001, () => {
  console.log("✅ Backend rodando em http://localhost:3001");
});
