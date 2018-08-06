/**
 *
 * Arquivo: middleware/index.js
 * Data: 05/08/2018
 * Descrição: Arquivo responsável por manipular os middlewares da aplicação:
 * Author: Glaucia Lemos
 * 
 * LINK sobre o que são middlewares: https://udgwebdev.com/entendendo-como-funciona-os-middlewares-do-express/
*/

import { Router } from 'express';

export default({ config, db }) => {
    let api = Router();
    
    //Aqui depois incluiremos um middleware:

    return api;
}