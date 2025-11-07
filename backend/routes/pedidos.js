const express = require("express");
const router = express.Router();
const { criarPedido } = require("../controllers/pedidosController");

router.post("/", criarPedido);

module.exports = router;
