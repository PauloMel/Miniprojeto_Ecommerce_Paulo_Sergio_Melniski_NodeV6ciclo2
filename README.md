● Nome do estudante e turma.Nome do Projeto: Mini-Projeto Avaliativo sobre uma pequena loja virtual
● Nome do estudante: Paulo Sérgio Melniski
● Turma: Node6 Ciclo2
● Data: Outubro de 2026
● Objetivo da aplicação: Seja capaz de administrar um catálogo de produtos, gerenciar compras e registrar pedidos,
mantendo as informações consistentes durante a execução.
● Funcionalidades implementadas: 
Módulos implementados funcionais:
(types.ts) definição dos tipos utilizados pelo sistema.
(produtos.ts) para cadastro, consulta, atualização e remoção de produtos.
(clientes.ts) para cadastro e consulta de clientes.
(carrinho.ts) para operações do carrinho e cálculos dos valores.
(pedidos.ts) para finalização e consulta de pedidos.
(relatorios.ts) para funções de consolidação e apresentação dos pedidos realizados.
(main.ts) para inicialização da aplicação e demonstração das funcionalidades.
● Tecnologias utilizadas.
Node.js e Typescript
● Estrutura dos arquivos: os arquivos estão estruturados dentro da pasta principal: Miniprojeto_Ecommerce_Paulo_Sergio_Melniski_NodeV6ciclo2, no diretório src com os arquivos carrinho.ts; clientes.ts; helper.ts; mains.ts; pedido.ts; produtos.ts e types.ts e no diretório dist sendo os aquivos: README.md; package.json e tsconfig.json
● Instruções de compilação e execução: Executar primeiramente o compilador:> npx tsc e depois a instrução:> node .\dist\main.js
● Exemplos das principais operações.
-O sistema após a compilação e execução do node .\dist\main.js, gera um menu para escolher uma opção, para Cadastrar Cliente; Listar Clientes; Cadastrar Produto; Ver Produtos; Atualizar Produto; Remover Produto; Adicionar Produto ao Carrinho; Ver Carrinho Atual; Finalizar Pedido; Relatório de Pedidos Realizados e opção para Sair do Sistema.
● Regras de negócio implementadas: O sistema permite realizar a compra e após concluida gera um relatório apresentando os resultados de pedidos realizados. 
● Limitações conhecidas do sistema: O sistema não apresenta tela de interface gráfica e não tem login. O sistema não tem opção de pagamento ou geração de comunicação financeira com uma instituição financeira para pagamento. Também não tem gerenciamento fiscal. É apenas um sistema de TCI, rodando apenas via terminal.
