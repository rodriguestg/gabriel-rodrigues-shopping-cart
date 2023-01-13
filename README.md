# Carrinho de Compras! :shopping_cart:

<summary><strong>👨‍💻 O que foi desenvolvido</strong></summary><br />

Foi desenvolvido um **carrinho de compras** totalmente dinâmico! 🛒

Que consume dados diretamente de uma **API!** 🤩

Esse projeto foi posto em prática o desenvolvimento orientado a testes, o famoso TDD (Test Driven Development)! 🚀

Protótipo:

![Project Gif](./prototipo.gif)

# Quer ver o projeto em sua máquina?

<details>
  <summary><strong>Detalhes</strong></summary><br />

1. Clone o repositório
  * `git clone git@github.com:rodriguestg/gabriel-rodrigues-shopping-cart.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd gabriel-rodrigues-shopping-cart`

2. Instale as dependências e inicialize o projeto
    * `npm install`
    * Abra o arquivo html.
</details>

<details>
<summary><strong>🏗 Estrutura do projeto</strong></summary><br />

Contém os arquivos `index.html`, `style.css` e `script.js`, onde estão os códigos HTML, CSS e JavaScript, respectivamente. 

<details>
  <summary>
    Clique aqui para saber um pouco mais sobre o que cada função faz
  </summary> <br />

  - `createProductImageElement`: Cria um elemento de imagem;
  - `createCustomElement`: Estrutura para criar um elemento;
  - `createProductItemElement`: Cria a lista de produtos;
  - `getSkuFromProductItem`: Pega o `id` de um produto;
  - `cartItemClickListener`: Escuta a ação de clicar em um item no carrinho;
  - `createCartItemElement`: Cria os elementos do carrinho.

</details>
</details>

<details>
<summary><strong>⚙️ API do Mercado Livre</strong></summary><br />

- `https://api.mercadolibre.com/sites/MLB/search?q=$QUERY`: traz uma lista de produtos, onde `$QUERY` é o termo a ser buscado.
- `https://api.mercadolibre.com/items/$ItemID`: traz detalhes de um determinado produto, onde `$ItemID` é o `id` do produto a ser buscado.
  </details>

<!-- Olá, Tryber!
Esse é apenas um arquivo inicial para o README do seu projeto no qual você pode customizar e reutilizar todas as vezes que for executar o trybe-publisher.

Para deixá-lo com a sua cara, basta alterar o seguinte arquivo da sua máquina: ~/.student-repo-publisher/custom/_NEW_README.md

É essencial que você preencha esse documento por conta própria, ok?
Não deixe de usar nossas dicas de escrita de README de projetos, e deixe sua criatividade brilhar!
:warning: IMPORTANTE: você precisa deixar nítido:
- quais arquivos/pastas foram desenvolvidos por você; 
- quais arquivos/pastas foram desenvolvidos por outra pessoa estudante;
- quais arquivos/pastas foram desenvolvidos pela Trybe.
-->
