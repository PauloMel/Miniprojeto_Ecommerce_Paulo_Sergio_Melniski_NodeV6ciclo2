import promptSync = require('prompt-sync');
import { cadastrarCliente, listarClientes } from "./clientes";
import { cadastrarProduto, listarProduto } from "./produtos";
import type { Cliente, Produto } from "./types";

const prompt = promptSync({ sigint: true });

let menu: number; // Alterado para let para atualizar a cada ciclo do loop
do {
    console.log('\n--- MENU ---');
    console.log('1-Cadastrar Cliente');
    console.log('2-Listar Clientes');
    console.log('3-Cadastrar Produto');
    console.log('4-Ver Produto');
    console.log('0-Sair do Sistema');

    menu = Number(prompt('Digite a opção desejada: '));

    switch (menu) {
        case 1:
            cadastrarCliente();
            break;
        case 2:
            console.log('Seus clientes são: ');
            console.log(listarClientes());
            break;
        case 3:
            cadastrarProduto();
            break;
        case 4:
            console.log('Seus produtos são: ');
            console.log(listarProduto());
            break;
        case 0:
            console.log('Você saiu do Sistema ');
            break;
        default:
            console.log('DIGITE UMA OPÇÃO VÁLIDA: ');
    }

} while (menu !== 0);