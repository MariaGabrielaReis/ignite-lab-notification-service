<div>
  <img align="left" src="https://user-images.githubusercontent.com/69374340/209359654-1b3fb42f-4dd3-4e7b-b037-f1ce22dfe224.png" width="270" alt="Logo do serviço de notificação" />
  
  <p>
  Microsserviço que manipula notificações, permitindo enviar, cancelar, ler ou "desler" notificações, além de contar e listar as notificações de determinado destinatário.
  
  > Projeto construído no evento Ignite Lab de Node (oferecido pela RocketSeat). :rocket:
  </p>
</div>

<span id="tecs">

### :hammer_and_wrench: Tecnologias
As seguintes tecnologias e ferramentas estão sendo utilizadas neste projeto: **TypeScript, NodeJS, Nest, Prisma, Insomnia, Kafka**

<span id="requisitos">

## :gear: Como rodar
Antes de começar, você vai precisar ter instalado algumas coisinhas, como o Node.js e o Yarn, é só seguir esse passo a passo [aqui](https://www.notion.so/Instala-o-das-ferramentas-405f3e8b014649cbb422dee6b5bd0535). Tenha também o [Git](https://git-scm.com/), para clonar este repositório!

```bash
# Clone esse repositório
$ git clone https://github.com/MariaGabrielaReis/ignite-lab-notification-service.git

# Acesse a pasta src
$ cd src

# Instale as dependências do projeto, assim como suas tipagens
$ yarn

# Para criar o banco de dados e suas tabelas, rode as migrations
$ npx prisma migrate dev

# Para visualizar os dados, execute
$ npx prisma studio

# Opcional: teste a aplicação
$ yarn test

# Execute a aplicação
$ yarn run start:dev

# O servidor inciará na porta:3000 - acesse http://localhost:3000
# Para utilizar as funcionalidades da aplicação, use o Insomnia para simular requisições e respostas das rotas
```

<span id="rotas">
  
## :railway_track: Rotas
> Em breve...

<!-- Send Notification
 Count Recipient Notifications
 Get Recipient Notifications
 Cancel Notification
 Read Notification
 Unread Notification -->

[![image](https://img.shields.io/badge/✨%20Maria%20Gabriela%20Reis,%202022-LinkedIn-009973?style=flat-square)](https://www.linkedin.com/in/mariagabrielareis/)
