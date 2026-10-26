type Cliente = {
    id: string;
    nome: string;
    email: string;
}

type Produto = {
    id: string;
    categoria: string;
    nome: string;
    preco: number;      // Preço com suporte a 2 casas decimais
    quantidade: number; // Estoque
}

type CarrinhoItem = {
    idProduto: string;
    nomeProduto: string;
    quantidadeComprada: number;
    precoUnitario: number;
    subtotal: number;   // Subtotal do item (quantidade * preço unitário)
}

type Pedido = {
    idPedido: string;
    idCliente: string;
    itens: CarrinhoItem[];
    valorTotal: number; // Valor total formatado com 2 casas decimais
    data: string;       // Data do pedido
}

export type {
    Cliente,
    Produto,
    CarrinhoItem,
    Pedido
}