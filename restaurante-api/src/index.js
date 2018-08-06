/**
 *
 * Arquivo: index.js
 * Data: 05/08/2018
 * Descrição: Arquivo responsável pela execução da API.
 * Author: Glaucia Lemos
 *
 */

// Importar alguns pacotes para o nosso projeto:

import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import config from './config';
import routes from './routes';

let app = express();
app.server = http.createServer(app);

// Middleware:

// Configuração do Parser (application/json):
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuração da Autenticação:


// Rotas da API v1 (/v1):
app.use('/v1', routes);

app.server.listen(config.port);
console.log(`Aplicação sendo executada na porta ${app.server.address().port}`);

export default app;
