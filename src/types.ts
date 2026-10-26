type Cliente = {
    id: string;
    nome: string;
    email: string;
}

type Produto = {
    id: string; // Corrigido de number para string para compatibilidade com o helper
    categoria: string;
    nome: string;
    quantidade: number;
}

export type {
    Cliente,
    Produto
}