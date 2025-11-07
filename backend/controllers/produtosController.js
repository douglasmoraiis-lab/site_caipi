const produtos = require("../data/produtos.json");

exports.listarProdutos = (req, res) => {
  res.json(produtos);
};
