import type { Carrinho, Produto } from "./types";
import { listarProduto as listarProdutosGeral } from "./produtos";
import promptSync = require("prompt-sync");

const prompt = promptSync({ sigint: true });

const compras: Carrinho[] = [];

function listarProdutosDisponiveis(): Produto[] {
    const listaProduto = listarProdutosGeral();
    const produtoDisponivel = listaProduto.filter((produto: Produto) => {
        return !compras.find((compra: Carrinho) => produto.id === compra.idProduto);
    });

    console.log('Os produtos disponíveis são:');
    console.log(produtoDisponivel);
    
    return produtoDisponivel;
}

function verificarProdutoDisponivel(id: string): boolean {
    const produtoDisponivel = listarProdutosDisponiveis();
    return Boolean(produtoDisponivel.find((produto: Produto) => id === produto.id));
}

function fazerCompra(): void {
    listarProdutosDisponiveis();
    const produtoSelecionado = String(prompt('Digite o ID do produto que deseja comprar: '));
    
    if (!verificarProdutoDisponivel(produtoSelecionado)) {
        console.log('Esse produto não está disponível ou não existe.');
        return;
    }

    const novaCompra: Carrinho = {
        idProduto: produtoSelecionado,
        quantidadeComprada: 1
    };

    compras.push(novaCompra);
    console.log('Produto adicionado ao carrinho com sucesso!');
}

function listarCompras(): Carrinho[] {
    console.log(compras);
    return compras;
}

export {
    compras,
    fazerCompra,
    listarCompras
}