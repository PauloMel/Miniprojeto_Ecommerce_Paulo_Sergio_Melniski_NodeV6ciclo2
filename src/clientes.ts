import type { Cliente } from "./types";
import { validaTexto } from "./helper";
import promptSync = require("prompt-sync");

const prompt = promptSync({ sigint: true });

const clientes: Cliente[] = [];

function cadastrarCliente(): void {
    const idInput: string = String(prompt('Digite o ID do cliente: '));
    const nomeInput: string = String(prompt('Digite o nome do cliente: '));
    const emailInput: string = String(prompt('Digite o e-mail do cliente: '));

    if (!validaTexto(idInput) || !validaTexto(nomeInput) || !validaTexto(emailInput)) {
        console.log('Dados inválidos.');
        return;
    }

    if (clientes.find((cliente: Cliente) => cliente.id === idInput)) {
        console.log('Já existe cliente com esse ID');
        return;
    }
    
    const novoCliente: Cliente = {
        id: idInput,
        nome: nomeInput,
        email: emailInput
    };

    clientes.push(novoCliente);
    console.log('Cliente cadastrado com sucesso!');
}

function listarClientes(): Cliente[] {
    return clientes;
}

function buscarClientePorId(id: string): Cliente | undefined {
    return clientes.find(cliente => cliente.id === id);
}

export {
    cadastrarCliente,
    listarClientes,
    buscarClientePorId
}