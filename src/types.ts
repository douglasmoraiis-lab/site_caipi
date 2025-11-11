// src/types.ts

export interface Produto {
  id: string | number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  categoria: string;
}

export interface Adicional {
  id: string | number;
  nome: string;
  preco: number;
}

export interface CartItem {
  id: string | number;
  nome: string;
  preco: number;
  quantidade: number;
  imagem: string;
  adicionais?: Adicional[];
}
export interface Pedido {
  id: string | number;
  itens: CartItem[];
  total: number;
  nomeCliente: string;
  enderecoEntrega: string;
  telefoneContato: string;
  status: "pendente" | "em_preparo" | "enviado" | "entregue";
  dataPedido: string;
}