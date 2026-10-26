import type { Produto } from "./types";
import { validaTexto } from "./helper";
import promptSync = require("prompt-sync");

const prompt = promptSync({ sigint: true });

const produtos: Produto[] = [];

function cadastrarProduto(): void {
    const idInput: string = String(prompt('Digite o ID do produto: '));
    const categoriaInput: string = String(prompt('Digite a categoria do produto: '));
    const nomeInput: string = String(prompt('Digite o nome do produto: '));
    
    // Tratamento para garantir 2 casas decimais no preço
    const precoInput: number = Number(Number(prompt('Digite o preço do produto (ex: 10.50): ')).toFixed(2));
    const quantidadeInput: number = Number(prompt('Digite a quantidade em estoque do produto: '));

    if (!validaTexto(idInput) || !validaTexto(categoriaInput) || !validaTexto(nomeInput)) {
        console.log('Dados de texto do produto inválidos.');
        return;
    }

    if (isNaN(precoInput) || isNaN(quantidadeInput) || precoInput < 0 || quantidadeInput < 0) {
        console.log('Preço ou quantidade em estoque inválidos.');
        return;
    }

    if (produtos.find((produto: Produto) => produto.id === idInput)) {
        console.log('Já existe produto com esse ID.');
        return;
    }

    const novoProduto: Produto = {
        id: idInput,
        categoria: categoriaInput,
        nome: nomeInput,
        preco: precoInput,
        quantidade: quantidadeInput
    };

    produtos.push(novoProduto);
    console.log(`Produto cadastrado com sucesso! Preço formatado: R$ ${novoProduto.preco.toFixed(2)}`);
}

function atualizarProduto(): void {
    const idInput: string = String(prompt('Digite o ID produto que deseja atualizar: '));
    const produto = produtos.find((p: Produto) => p.id === idInput);

    if (!produto) {
        console.log('Produto não encontrado com esse ID.');
        return;
    }

    console.log('Produto encontrado:', produto);

    const categoriaInput: string = String(prompt(`Digite a nova categoria (atual: ${produto.categoria}): `));
    const nomeInput: string = String(prompt(`Digite o novo nome (atual: ${produto.nome}): `));
    const precoInputStr: string = String(prompt(`Digite o novo preço (atual: ${produto.preco.toFixed(2)}): `));
    const quantidadeInputStr: string = String(prompt(`Digite a nova quantidade em estoque (atual: ${produto.quantidade}): `));

    if (categoriaInput.trim() !== '') {
        if (!validaTexto(categoriaInput)) return;
        produto.categoria = categoriaInput;
    }

    if (nomeInput.trim() !== '') {
        if (!validaTexto(nomeInput)) return;
        produto.nome = nomeInput;
    }

    if (precoInputStr.trim() !== '') {
        const precoInput = Number(Number(precoInputStr).toFixed(2));
        if (!isNaN(precoInput) && precoInput >= 0) {
            produto.preco = precoInput;
        } else {
            console.log('Preço inválido, mantido o anterior.');
        }
    }

    if (quantidadeInputStr.trim() !== '') {
        const quantidadeInput = Number(quantidadeInputStr);
        if (!isNaN(quantidadeInput) && quantidadeInput >= 0) {
            produto.quantidade = quantidadeInput;
        } else {
            console.log('Quantidade inválida, mantida a anterior.');
        }
    }

    console.log('Produto atualizado com sucesso!');
}

function removerProduto(): void {
    const idInput: string = String(prompt('Digite o ID do produto que deseja remover: '));
    const index = produtos.findIndex((p: Produto) => p.id === idInput);

    if (index === -1) {
        console.log('Produto não encontrado com esse ID.');
        return;
    }

    produtos.splice(index, 1);
    console.log('Produto removido com sucesso!');
}

function listarProduto(): Produto[] {
    // Exibe formatado com subtotal/preço de referência se necessário
    return produtos;
}

export {
    cadastrarProduto,
    listarProduto,
    atualizarProduto,
    removerProduto
}