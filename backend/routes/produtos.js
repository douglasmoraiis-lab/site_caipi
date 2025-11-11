const express = require("express");
const { getProdutos } = require("../controllers/produtosController");

const router = express.Router();

router.get("/", getProdutos);

module.exports = router;
