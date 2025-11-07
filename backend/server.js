const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Rotas
const produtosRoutes = require("./routes/produtos");
const pedidosRoutes = require("./routes/pedidos");

app.use("/api/produtos", produtosRoutes);
app.use("/api/pedidos", pedidosRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
