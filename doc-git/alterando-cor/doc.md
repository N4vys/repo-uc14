1. Descrição Geral

O "ATcor" é uma página web interativa que permite ao usuário trocar a cor de fundo da página com um clique em diferentes botões de cores. Esta ferramenta é útil para experimentação de cores e simulação de temas.
2. Estrutura do Projeto

O projeto é simples, composto de um arquivo HTML, uma folha de estilo CSS (não fornecida aqui) e um script JavaScript para manipulação das cores:

    HTML: Estrutura principal da interface.
    CSS: Define o estilo visual (localizado em css/style.css).
    JavaScript: Controla a lógica de troca de cores (arquivo script.js).

3. Funcionalidades

    Botões de Cor: Alteram a cor do fundo para vermelho, verde, azul ou amarelo ao serem clicados.
    Cor Aleatória: Aplica uma cor aleatória ao fundo da página.
    Input de Cor Personalizada: Permite ao usuário digitar um nome de cor ou código hexadecimal para alterar a cor do fundo.
    Selecionador de Cor: Um seletor de cor nativo que permite escolher uma cor manualmente.

4. Guia de Uso

    Troca de Cor por Botões:
        Clique em qualquer um dos botões de cor (Vermelho, Verde, Azul ou Amarelo) para alterar a cor do fundo para a cor correspondente.

    Cor Aleatória:
        Clicando no botão "Cor Aleatória", o fundo é alterado para uma cor gerada aleatoriamente.

    Cor Personalizada:
        Digite o nome de uma cor ou um código hexadecimal (por exemplo, #FF5733) no campo de texto e clique em "Aplicar cor" para mudar a cor de fundo para o valor inserido.

    Seletor de Cor:
        Use o seletor de cor para escolher uma cor manualmente, o fundo mudará automaticamente conforme a cor escolhida.

5. Detalhes de Implementação

    Botões de Cores: Cada botão chama a função trocaCor() com a cor correspondente como argumento.
    Cor Aleatória: O botão de cor aleatória chama a função corAleatoria(), que gera uma cor aleatória e a aplica como fundo.
    Cor Personalizada: O botão "Aplicar cor" usa o valor digitado no campo de texto e aplica a cor ao fundo da página.
    Seletor de Cor: O seletor chama a função trocaCor() com o valor de cor escolhido pelo usuário.

6. Possíveis Melhorias

    Feedback Visual: Exibir a cor atual em uma área dedicada para melhor visualização.
    Histórico de Cores: Salvar as últimas cores aplicadas para fácil acesso.
    Validação de Cores: Validar o campo de entrada para garantir que o usuário insira um valor válido de cor ou hexadecimal.
