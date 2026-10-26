import type { CarrinhoItem, Produto } from "./types";
import { listarProduto as listarProdutosGeral } from "./produtos";
import promptSync = require("prompt-sync");

const prompt = promptSync({ sigint: true });

const carrinhoAtual: CarrinhoItem[] = [];

function listarProdutosDisponiveis(): Produto[] {
    const listaProduto = listarProdutosGeral();
    const produtoDisponivel = listaProduto.filter((produto: Produto) => produto.quantidade > 0);

    console.log('\n--- Produtos Disponíveis ---');
    produtoDisponivel.forEach(p => {
        console.log(`ID: ${p.id} | Nome: ${p.nome} | Preço: R$ ${p.preco.toFixed(2)} | Estoque: ${p.quantidade}`);
    });
    
    return produtoDisponivel;
}

function adicionarAoCarrinho(): CarrinhoItem[] {
    const disponiveis = listarProdutosDisponiveis();
    if (disponiveis.length === 0) {
        console.log('Não há produtos disponíveis no estoque.');
        return carrinhoAtual;
    }

    const produtoSelecionado = String(prompt('Digite o ID do produto que deseja adicionar ao carrinho: '));
    const produtoObj = disponiveis.find((p: Produto) => p.id === produtoSelecionado);
    
    if (!produtoObj) {
        console.log('Esse produto não está disponível ou não existe.');
        return carrinhoAtual;
    }

    const qtdDesejada = Number(prompt(`Digite a quantidade desejada (Disponível: ${produtoObj.quantidade}): `));

    if (isNaN(qtdDesejada) || qtdDesejada <= 0 || qtdDesejada > produtoObj.quantidade) {
        console.log('Quantidade inválida ou acima do estoque disponível.');
        return carrinhoAtual;
    }

    // Calcula o subtotal do item com 2 casas decimais
    const subtotalItem = Number((qtdDesejada * produtoObj.preco).toFixed(2));

    // Abate provisoriamente ou efetivamente do estoque
    produtoObj.quantidade -= qtdDesejada;

    const novoItem: CarrinhoItem = {
        idProduto: produtoObj.id,
        nomeProduto: produtoObj.nome,
        quantidadeComprada: qtdDesejada,
        precoUnitario: produtoObj.preco,
        subtotal: subtotalItem
    };

    carrinhoAtual.push(novoItem);
    console.log(`Item adicionado! Subtotal: R$ ${subtotalItem.toFixed(2)}`);
    
    return carrinhoAtual;
}

function limparCarrinho(): void {
    carrinhoAtual.length = 0;
}

export {
    carrinhoAtual,
    adicionarAoCarrinho,
    limparCarrinho
}