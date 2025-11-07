let pedidos = [];

exports.criarPedido = (req, res) => {
  const novoPedido = {
    id: pedidos.length + 1,
    cliente: req.body.cliente,
    itens: req.body.itens,
    total: req.body.total,
    data: new Date()
  };

  pedidos.push(novoPedido);

  res.status(201).json({
    mensagem: "Pedido recebido com sucesso!",
    pedido: novoPedido
  });
};
