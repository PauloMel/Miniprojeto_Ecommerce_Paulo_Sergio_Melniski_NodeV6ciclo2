import type { Produto } from "./types";
import { validaTexto } from "./helper";
import promptSync = require("prompt-sync");

const prompt = promptSync({ sigint: true });

const produtos: Produto[] = [];

function cadastrarProduto() {
    const idInput: string = String(prompt('Digite o ID do produto: '));
    const categoriaInput: string = String(prompt('Digite a categoria do produto: '));
    const nomeInput: string = String(prompt('Digite o nome do produto: '));
    const quantidadeInput: number = Number(prompt('Digite a quantidade do produto: '));

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
    if (!validaTexto(produto.id) || !validaTexto(produto.nome) || !validaTexto(produto.categoria)) {
        console.log('Dados do produto inválidos.');
        return false;
    }
    produtos.push(produto); // Corrigido de produto.push para produtos.push
    console.log('Produto cadastrado com sucesso!');
    return true;
}

function listarProduto(): Produto[] {
    return produtos;
}

export {
    cadastrarProduto,
    listarProduto
}