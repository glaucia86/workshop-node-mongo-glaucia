/**
 *
 * Arquivo: middleware/authMiddleware.js
 * Data: 05/08/2018
 * Descrição: Arquivo responsável por manipular os middlewares da aplicação:
 * Author: Glaucia Lemos
 * 
 * LINK sobre o que são middlewares: https://udgwebdev.com/entendendo-como-funciona-os-middlewares-do-express/
 *
 */

import jwt from 'jsonwebtoken';
import expressJwt from 'express-jwt';

// A cada 30 dias irá gerar um novo token:
const TOKEN = 60*60*24*30; 
const SECRET = 'flamengo 10';

let authenticate = expressJwt({ secret: SECRET });

let generateAccessToken = (req, res, next) => {
    req.token = req.token || {};
    req.token = jwt.sign({
        id: req.user.id,
    }, SECRET, {
        expiresIn: TOKEN //a cada 30 dias
    });

    next();
}

let respond = (req, res) => {
    res.status(200).json({
        user: req.user.username,
        token: req.token
    });
}

module.exports = {
    authenticate,
    generateAccessToken,
    respond
};