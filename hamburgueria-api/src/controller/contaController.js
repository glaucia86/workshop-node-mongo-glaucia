/**
 *
 * Arquivo: controller/contaController.js
 * Data: 31/07/2018
 * Descrição: Arquivo responsável por manipular as rotas controllers dos endpoints
 * da Conta.
 * Author: Glaucia Lemos
 *
 */

import mongoose from 'mongoose';
import { Router } from 'express';
import Conta from '../model/conta';
import bodyParser from 'body-parser';
import passport from 'passport';
import config from '../config';

import { generateAccessToken, respond, authenticate } from '../middleware/authMiddleware';

export default ({ config, db }) => {
    let api = Router();

    // 0) Método (GET): Método responsável por retornar o usuário: 'http://localhost4000/v1/conta
    api.get('/', (req, res) => {
        res.status(200).send({ user: req.user })
    });

    // 1) Método (POST): Método para cadastrar um novo usuário: 'http://localhost:4000/v1/conta/cadastrar':
    api.post('/cadastrar', (req, res) => {
        Conta.register(new Conta({ username: req.body.email }), req.body.senha, (error, conta) => {
            if(error) {
                return res.status(500).send('Ocorreu um erro...: ' + error);
            } 
            
            passport.authenticate(
                'local', {
                    session: false
                })(req, res, () => {
                res.status(200).send('Usuário cadastrado com sucesso!');    
            });
        });
    });

    // 2) Método(POST): Método responsável por realizar o login: 'http://localhost:4000/v1/conta/login'
    api.post('/login', passport.authenticate(
        'local', {
            session: false,
            scope: []
        }), generateAccessToken, respond);
    

    // 3) Método (GET): Método responsável por realizar o logout: 'http://localhost:4000/conta/logout'
    api.get('/logout', authenticate, (req, res) => {
        req.logout();
        res.status(200).send('Você saiu com sucesso!')   
    });

    // 4) Método (GET): Método responsável por listar os usuários (com bearer): 'http://localhost:4000/conta/sobre'
    api.get('/sobre', authenticate, (req, res) => {
        res.status(200).json(req.user);
    });

    return api;
}