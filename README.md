# Repositório: Workshop - Criando uma App REST API com Node.js by Glaucia Lemos

<p align="center">
  <img src="https://i.imgsafe.org/8d/8dbb5a2b91.jpeg"/>  
</p>

Repositório responsável pelo códigos desenvolvidos durante o workshop: **Criando uma App REST API com Node.js** realizado no dia 05/08/2018.

**VAGAS LIMITADAS**:250
**LINK INSCRIÇÃO WORKSHOP**: 
**PREÇO**: R$ 25,00


## ⚡️Recursos Utilizados no Workshop:

- Visual Studio Code - [DOWNLOAD AQUI](https://code.visualstudio.com/)
- Node.JS - [DOWNLOAD AQUI](https://nodejs.org/en/) 
- Express.Js
- MongoDb & MLab;
- Code Metrics; (análise de desenvolvimento do codigo)
- Visual Studio Code;
- Json data (para retornar os dados);
- PostMan (testar a API criada);

## :fire: :fire: Pré-Requisistos para realização do Workshop:

* **Ter noções de JavaScript:**
    - Desvendando a linguagem JavaScript (Rodrigo Branas): [AQUI](https://www.youtube.com/playlist?list=PLQCmSnNFVYnT1-oeDOSBnt164802rkegc)

```
Não precisam ter conhecimento em Node.js. Uma vez que, durante o workshop, vocês estarão aprendendo totalmente na prática a desenvolver uma API em Node. 😜
```


## :rocket: :rocket: Testando a Aplicação no Postman: 

Caso queira testar as API's criadas no projeto, primeiro baixe o [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop).
Depois de realizar o download do Postman, basta agora realizar os passos abaiaxo para 
poder testar cada API criada!

## 🔥 Executando Código Localmente:

Caso você deseja executar o projeto na sua máquina local, basta seguir os passos abaixo:

### Começando...

Para começar, você deve simplesmente clonar o repositório do projeto na sua máquina e instalar as dependências. 😝

### Pré-Requisitos de Instalação:

Antes de instalar as dependências no projeto, você precisa já ter instalado na sua máquina:

* **Node.Js**: Caso não tenha, basta realizar o download [Aqui](https://nodejs.org/en/)
* **MongoDb**: Caso também não tenha, basta realizar o download [Aqui](https://www.mongodb.com/download-center#community)


### Instalando as Dependências (via Windows):

Abre o cmd (caso esteja utilizando o Windows) e digite a path do seu projeto

```
cd "C:\Users\NomeDoComputador\Documents\..."
```

Depois, quando estiver na pasta do projeto, basta digitar no cmd a seguinte instrução: **(dentro do src)**

```
npm install
```

Ao digitar a instrução acima, automaticamente ele irá baixar todas as dependências listadas e definidas no arquivo package.json:

* `node_modules` - que contêm os packages do npm que precisará para o projeto.

### Instalação dos Programas via Linux:

Estarei disponibilizando os links onde explicam como baixar:

- Node.Js: [AQUI](https://nodejs.org/en/download/package-manager/)
- MongoDb: [AQUI](https://docs.mongodb.com/v3.0/administration/install-on-linux/)

## 💥 Padrão das Rotas Criadas: 

Procurando seguir o padrão e design das API's, segue abaixo as URI's das rotas a serem desenvolvidas:

obs.: api de exemplo através do site: https://jsonplaceholder.typicode.com


### Executando a Aplicação: 

Bom, agora na mesma tela do cmd, basta iniciar o server para o projeto ser executado localmente.

```
node server.js
```

Depois, você precisará abrir um outro terminal na sua máquina e iniciar o MongoDb. Basta digitar na tela do cmd o seguinte comando:

```
mongod
```

Caso o MongoDb esteja devidamente instalado em sua máquina, ele iniciará o serviço mostrando que a port 27017 foi iniciada.


Agora, abre a página da aplicação em `http://localhost:3000/api`. E pronto a aplicação será executada de maneira local na sua máquina.        




