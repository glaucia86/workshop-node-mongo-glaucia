/**
 *
 * Arquivo: routes/index.js
 * Data: 05/08/2018
 * Descrição: Arquivo responsável por manipular as rotas dos endpoints da API
 * Author: Glaucia Lemos
 *
 */

import express from 'express';
import config from '../config';
import middleware from '../middleware';
import inicializacaoBd from '../db';
import restaurante from '../controller/restauranteController';

let router = express();

// Conexao com a base de dados:
inicializacaoBd(db => {
    // Usaremos um middleware interno:
    router.use(middleware({ config, db }));

    // Aqui incluiremos as v1 (/v1): rota default
    router.use('/restaurante', restaurante({ config, db }));
});

export default router;


