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
import hamburgueria from '../controller/hamburgueriaController';
import conta from '../controller/contaController';

let router = express();

// Conexão com a base de dados:
inicializacaoBd(db => {
    //Aqui usaremos um middleware interno:
    router.use(middleware({ config, db }));

    // Aqui incluiremos as rotas v1 (/v1): 
    router.use('/hamburgueria', hamburgueria({ config, db }));
    router.use('/conta', conta({ config, db }));

});

export default router;


