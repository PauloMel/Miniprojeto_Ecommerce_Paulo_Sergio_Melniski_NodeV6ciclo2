import type { Produto } from "./types";
import { validaTexto } from "./helper";
import promptSync = require("prompt-sync");

const prompt = promptSync({ sigint: true });

const produtos: Produto[] = [];

function cadastrarProduto(): void {
    const idInput: string = String(prompt('Digite o ID do produto: '));
    const categoriaInput: string = String(prompt('Digite a categoria do produto: '));
    const nomeInput: string = String(prompt('Digite o nome do produto: '));
    const quantidadeInput: number = Number(prompt('Digite a quantidade do produto: '));

    if (!validaTexto(idInput) || !validaTexto(categoriaInput) || !validaTexto(nomeInput)) {
        console.log('Dados do produto inválidos.');
        return;
    }

    if (produtos.find((produto: Produto) => produto.id === idInput)) {
        console.log('Já existe produto com esse ID');
        return;
    }

    const novoProduto: Produto = {
        id: idInput,
        categoria: categoriaInput,
        nome: nomeInput,
        quantidade: quantidadeInput
    };

    adicionarProduto(novoProduto);
} 

function adicionarProduto(produto: Produto): boolean {
    produtos.push(produto);
    console.log('Produto cadastrado com sucesso!');
    return true;
}

function filtrarProdutoPorNome(nome: string): Produto[] {
    return produtos.filter((produto: Produto) => produto.nome === nome);
}

function filtrarProdutoPorCategoria(categoria: string): Produto[] {
    return produtos.filter((produto: Produto) => produto.categoria === categoria);
}

function listarProduto(): Produto[] {
    return produtos;
}

export {
    cadastrarProduto,
    listarProduto,
    filtrarProdutoPorNome,
    filtrarProdutoPorCategoria
}