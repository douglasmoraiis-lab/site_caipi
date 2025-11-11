const fs = require("fs");
const path = require("path");

const filePath = path.resolve(__dirname, "../data/produtos.json");

const getProdutos = (req, res) => {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    const produtos = JSON.parse(data);
    res.json(produtos);
  } catch (error) {
    console.error("Erro ao ler produtos.json:", error);
    res.status(500).json({ message: "Erro ao carregar produtos" });
  }
};

module.exports = { getProdutos };
