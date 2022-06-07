link do back-end: https://github.com/DarioJunior/verztudy-api
# Verztudy
 Desafio para vaga de Desenvolvedor Fullstack Jr

## Instruções de como executar o projeto:

* Após clonar os repositórios de back-end e front-end, execute-os em modo de desenvolvimento através do comando `yarn dev` ou `npm run dev`, o back-end não é necessário caso opte por usar o docker, o container executara o yarn dev automaticamente;

**Certifique-se de ter as portas 3000 (front), 3333(back) e 3306(database) disponíveis e de que o processo do mysql esteja rodando corretamente**

### Para o front-end:
1) no terminal execute: yarn _(irá fazer a instalção das dependências)_
2) Crie o arquivo `.env` com o seguinte valor: VITE_API_URL='http://localhost:3333'

### Para o backe-end:

Caso opte por utilizar o docker:
1) Crie o arquivo .env com os seguintes valores: 

Está versão será para o acesso interno do docker caso deseje executá-lo: </br>
API_PORT=3333 </br>
API_SECRET='secret' </br>
DB_URL=mysql://root:admin@database:3306/verzel </br>


Caso opte por rodar o serviço mysql no docker e o backend localmente altere:
Esta versão será para o acesso interno do docker caso deseje executá-lo: </br>
API_PORT=3333 </br>
API_SECRET='secret' </br>
DB_URL=mysql://**seu user**:**sua senha**@**localhost**:**3309**/verzel </br>

_OBSERVAÇÃO: </br>
o local expõe a porta 3309 e redireciona para a porta 3306 do docker, para caso já tenha um serviço mysql rodando também localmente e não gere conflito!
Para ver os registros do DB no diretório do backend, rode npx prisma studio, ou o programa de sua preferência._

2) no terminal execute o comando: `yarn upd` _(Este comando vai subir o container expondo as portar 3333 para o back e 3306 para o db **PARA ACESSO INTERNO!**)_
3) 
4) Depois de subir os dois containers, acesse o terminal do container api, execute o comando `yarn prisma migrate dev`, este comando irá rodar as migrations (modules, classes e users), após rode o comando `yarn prisma db seed`, que irá popular o db `verzel` já com algumas informações incluindo dois usuários: </br>
**user: admin@gmail.com senha: admin123**</br>
**user: user@gmail.com senha: user123** _não há um endpoint para cadastro de usuários_

**Rode o ambiente de front-end com o comando `yarn dev` ou `npm run dev`.** 




