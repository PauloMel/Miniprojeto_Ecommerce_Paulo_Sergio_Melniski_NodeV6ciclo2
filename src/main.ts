import promptSync = require('prompt-sync');
import { cadastrarCliente, listarClientes } from "./clientes";
import { cadastrarProduto, listarProduto } from "./produtos";
import { fazerCompra, listarCompras } from './carrinho';

const prompt = promptSync({ sigint: true });

let menu: number;
do {
    console.log('\n ===>> ESCOLHA UMA OPÇÃO <<===');
    console.log('1-Cadastrar Cliente');
    console.log('2-Listar Clientes');
    console.log('3-Cadastrar Produto');
    console.log('4-Ver Produto');
    console.log('5-Fazer compras/carrinho');
    console.log('6-Ver Compras');
    console.log('9-Sair do Sistema');

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
        case 5:
            console.log('Fazer compras/carrinho: ');
            fazerCompra();
            break;
        case 6:
            console.log('Suas compras no carrinho são: ');
            listarCompras();
            break;
        case 9:
            console.log('Você saiu do Sistema ');
            break;
        default:
            console.log('DIGITE UMA OPÇÃO VÁLIDA: ');
    }

} while (menu !== 9);