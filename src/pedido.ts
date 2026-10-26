import type { Pedido } from "./types";
import { carrinhoAtual, limparCarrinho } from "./carrinho";
import { buscarClientePorId } from "./clientes";
import promptSync = require("prompt-sync");

const prompt = promptSync({ sigint: true });
const pedidos: Pedido[] = [];

function finalizarPedido(): void {
    if (carrinhoAtual.length === 0) {
        console.log('O carrinho está vazio. Adicione produtos antes de finalizar o pedido.');
        return;
    }

    const idClienteInput = String(prompt('Digite o ID do cliente comprador: '));
    const cliente = buscarClientePorId(idClienteInput);

    if (!cliente) {
        console.log('Cliente não encontrado com esse ID. Cadastre o cliente primeiro.');
        return;
    }

    // Calcula o valor total do pedido somando os subtotais
    const valorTotalPedido = Number(
        carrinhoAtual.reduce((acc, item) => acc + item.subtotal, 0).toFixed(2)
    );

    const novoPedido: Pedido = {
        idPedido: String(Date.now()), // ID único baseado no timestamp atual
        idCliente: cliente.id,
        itens: [...carrinhoAtual],
        valorTotal: valorTotalPedido,
        data: new Date().toLocaleString() // Data e hora atual do pedido
    };

    pedidos.push(novoPedido);
    limparCarrinho();

    console.log('\n========================================');
    console.log('         PEDIDO REALIZADO COM SUCESSO!  ');
    console.log('========================================');
    console.log(`ID do Pedido: ${novoPedido.idPedido}`);
    console.log(`Cliente: ${cliente.nome} (ID: ${cliente.id})`);
    console.log(`Data: ${novoPedido.data}`);
    console.log('--- Itens do Pedido ---');
    novoPedido.itens.forEach(item => {
        console.log(`- ${item.nomeProduto} | Qtd: ${item.quantidadeComprada} | Preço Un.: R$ ${item.precoUnitario.toFixed(2)} | Subtotal: R$ ${item.subtotal.toFixed(2)}`);
    });
    console.log(`Valor Total do Pedido: R$ ${novoPedido.valorTotal.toFixed(2)}`);
    console.log('========================================');
}

function listarPedidos(): Pedido[] {
    if (pedidos.length === 0) {
        console.log('Nenhum pedido cadastrado no sistema.');
        return [];
    }

    console.log('\n--- Lista de Pedidos Realizados ---');
    pedidos.forEach(p => {
        console.log(`\nPedido ID: ${p.idPedido} | Cliente ID: ${p.idCliente} | Data: ${p.data}`);
        p.itens.forEach(i => {
            console.log(`   > ${i.nomeProduto} (Qtd: ${i.quantidadeComprada}) - Subtotal: R$ ${i.subtotal.toFixed(2)}`);
        });
        console.log(`   > VALOR TOTAL: R$ ${p.valorTotal.toFixed(2)}`);
    });

    return pedidos;
}

export {
    finalizarPedido,
    listarPedidos
}