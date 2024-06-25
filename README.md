# Create a GitHub Action Using TypeScript

[![GitHub Super-Linter](https://github.com/actions/typescript-action/actions/workflows/linter.yml/badge.svg)](https://github.com/weenow/action-expose/actions/workflows/linter.yml)
![CI](https://github.com/weenow/action-expose/actions/workflows/ci.yml/badge.svg)
[![Check dist/](https://github.com/actions/typescript-action/actions/workflows/check-dist.yml/badge.svg)](https://github.com/weenow/action-expose/actions/workflows/check-dist.yml)
[![CodeQL](https://github.com/actions/typescript-action/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/weenow/action-expose/actions/workflows/codeql-analysis.yml)

GitHub Action para exportar as secrets no formato "KEY_1=value1 KEY_2=value2
KEY_3=value3".

## Como usar ?

## Contribuir

Depois de clonar o repositório para a sua máquina local ou codespace, você
precisará realizar algumas etapas de configuração inicial antes de poder fazer
alterações no código.

> [!NOTE]
>
> Você precisará ter o [Node.js](https://nodejs.org) instalado (18.x ou
> posterior deve funcionar!). Se você estiver usando um gerenciador de versões
> como [`nodenv`](https://github.com/nodenv/nodenv) ou
> [`nvm`](https://github.com/nvm-sh/nvm), este repositório tem um arquivo
> `.node-version` na raiz do repositório que será usado para alternar
> automaticamente para a versão correta. Além disso, este arquivo
> `.node-version` é usado pelo GitHub Actions em qualquer ação
> `actions/setup-node`.

1. :hammer_and_wrench: Instale as dependências do projeto

   ```bash
   npm install
   ```

1. :building_construction: Faça o bundle do código

   ```bash
   npm run bundle
   ```

Com isso, você estará pronto para começar a fazer alterações no código!

1. Criar um branch para a nova feature

   ```bash
   git checkout -b releases/v1
   ```

1. Substitua o conteúdo de `src/` com o seu código da Action
1. Execute o comando all para Formatar, e Construir o Build da Action.

   ```bash
   npm run all
   ```

1. Faça o commit das alterações

   ```bash
   git add .
   git commit -m "My first action is ready!"
   ```

1. Faça o push das alterações para o repositório

   ```bash
   git push -u origin releases/v1
   ```

1. Criar um Pull Request para a branch
1. Faça o merge do Pull Request na branch `main`

Pronto, a Action está publicada e pronta para ser usada. :rocket:
