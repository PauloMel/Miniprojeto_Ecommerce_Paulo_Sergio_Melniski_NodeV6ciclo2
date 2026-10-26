type Cliente = {
    id: string;
    nome: string;
    email: string;
}

type Produto = {
    id: string;
    categoria: string;
    nome: string;
    quantidade: number;
}

type Carrinho = {
    idProduto: string;
    quantidadeComprada: number;
}

export type {
    Cliente,
    Produto,
    Carrinho
}