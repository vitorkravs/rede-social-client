# Projeto Frontend de Autenticação - Layout Instagram

Este projeto é uma aplicação frontend de autenticação, inspirada no layout do Instagram, construída com Next.js, SASS para estilização e Axios para comunicação com a API. Ele permite o registro e login de usuários, simulando uma interface familiar para muitos usuários.

## Tecnologias Utilizadas

- Next.js

- SASS para estilização
  
- Axios para requisições HTTP

## Funcionalidades

Interface de login de usuário
Interface de registro de usuário

## Como Executar

Certifique-se de ter o Node.js instalado em sua máquina antes de seguir os passos abaixo.

## Clone o repositório:

```bash
git clone https://github.com/vitorkravs/rede-social-client.git

cd <NOME_DO_DIRETORIO>

npm install
```

## Execute o projeto:

```bash
npm run dev
```

O projeto estará rodando em http://localhost:3000

## Páginas

### Login

A página de login possui campos para o usuário inserir seu e-mail e senha. Ao submeter, uma requisição é enviada para a API de autenticação para verificar as credenciais.

### Registro

A página de registro permite que um novo usuário crie uma conta, inserindo seu e-mail, senha e confirmação de senha. Após o registro, uma requisição é enviada para a API para criar o novo usuário no sistema.

## Componentes Principais

Formulários de Login e Registro: formulários para coletar as informações do usuário, com validações básicas de campo.
Navegação: permite alternar entre as páginas de login e registro.
Feedback ao Usuário: mensagens de sucesso ou erro após tentativas de login ou registro.

## Estilização com SASS

O projeto utiliza SASS para uma estilização mais organizada e modular. Os arquivos .scss seguem uma estrutura que facilita a manutenção e atualização do estilo da aplicação.

## Comunicação com a API

Axios é utilizado para realizar as requisições HTTP para a API de autenticação, tratando as respostas e atualizando a interface do usuário de acordo com o resultado (sucesso ou falha).

## Contribuições

Contribuições são sempre bem-vindas! Para contribuir, crie um fork do projeto, faça suas alterações e submeta um Pull Request.
