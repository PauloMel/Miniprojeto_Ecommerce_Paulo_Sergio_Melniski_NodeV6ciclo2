import promptSync = require('prompt-sync');
import { cadastrarCliente, listarClientes } from "./clientes";
import { cadastrarProduto, listarProduto, atualizarProduto, removerProduto } from "./produtos";
import { carrinhoAtual, adicionarAoCarrinho } from './carrinho';
import { finalizarPedido, listarPedidos } from './pedido';

const prompt = promptSync({ sigint: true });

let menu: number;
do {
    console.log('\n ===>> MENU PRINCIPAL <<===');
    console.log('1 - Cadastrar Cliente');
    console.log('2 - Listar Clientes');
    console.log('3 - Cadastrar Produto');
    console.log('4 - Ver Produtos');
    console.log('5 - Atualizar Produto');
    console.log('6 - Remover Produto');
    console.log('7 - Adicionar Produto ao Carrinho');
    console.log('8 - Ver Carrinho Atual');
    console.log('9 - Finalizar Pedido');
    console.log('10 - Relatório de Pedidos Realizados');
    console.log('0 - Sair do Sistema');

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
            atualizarProduto();
            break;
        case 6:
            removerProduto();
            break;
        case 7:
            adicionarAoCarrinho();
            break;
        case 8:
            console.log('--- Carrinho Atual ---');
            console.log(carrinhoAtual);
            break;
        case 9:
            finalizarPedido();
            break;
        case 10:
            listarPedidos();
            break;
        case 0:
            console.log('Você saiu do Sistema.');
            break;
        default:
            console.log('DIGITE UMA OPÇÃO VÁLIDA.');
    }

} while (menu !== 0);