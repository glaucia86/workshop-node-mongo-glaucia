/**
 *
 * Arquivo: controller/restauranteController.js
 * Data: 05/08/2018
 * Descrição: Arquivo responsável por manipular as rotas controllers dos endpoints
 * do restaurante.
 * Author: Glaucia Lemos
 *
 */

import mongoose from 'mongoose';
import { Router } from 'express';
import Restaurante from '../model/restaurante';
import bodyParser from 'body-parser';

export default({ config, db }) => {
    let api = Router();


// 1) Método (POST): Criar Restaurante: 'http://localhost:4000/v1/restaurante/adicionarRestaurante'
    api.post('/adicionarRestaurante', (req, res) => {
        let novoRestaurante = new Restaurante();

        //Aqui vamos setar os campos do restaurante (via request):
        novoRestaurante.nome = req.body.nome;
        novoRestaurante.endereco = req.body.endereco;
        novoRestaurante.categoria = req.body.categoria;
        novoRestaurante.telefone = req.body.telefone;

        novoRestaurante.save(error => {
            if(error) {
                res.send('Erro ao tentar salvar o Restaurante...: ' + error);
            }

            res.json({ message: 'Restaurante adicionado com sucesso!' });
        });
    });

    // 2) Método (GET): Selecionar Todos os Restaurante: 'http://localhost:4000/v1/restaurante'
    api.get('/', (req, res) => {
        Restaurante.find({}, (error, restaurantes) => {
            if (error) {
                res.send('Erro ao selecionar o restaurante...: ' + error);
            }

            res.json(restaurantes);
        });
    });

    // 3) Método (GET): Selecionar Restaurante por Id: 'http://localhost:4000/v1/restaurante/:id'
    api.get('/:id', (req, res) => {
        Restaurante.findById(req.params.id, (error, restaurante) => {
            if (error) {
                res.send('Erro ao selecionar o restaurante...: ' + error);    
            }

            res.json(restaurante);
        });
    });

    // 4) Método (PUT): Atualizar Restaurante por Id: 'http://localhost:4000/v1/restaurante/:id'
    api.put('/:id', (req, res) => {
        Restaurante.findById(req.params.id, (error, restaurante) => {
            if (error) {
                res.send('Erro ao selecionar o restaurante...: ' + error);      
            }

            restaurante.nome = req.body.nome;
            restaurante.endereco = req.body.endereco;
            restaurante.categoria = req.body.categoria;
            restaurante.telefone = req.body.telefone;

            restaurante.save(error => {
                if(error) {
                    res.send('Erro ao tentar atualizar o restaurante...: ' + error);   
                }    

                res.json({ message: 'Restaurante atualizado com sucesso!' });
            });
        });       
    });

    // 5) Método: (DELETE): Deletar Restaurante por Id: 'http://localhost:4000/v1/restaurante/:id'
    api.delete('/:id', (req, res) => {
        Restaurante.remove({
            _id: req.params.id
        }, (error, restaurante) => {
            if (error) {
                res.send('Erro ao tentar excluir o restaurante...: ' + error);       
            }

            res.json({ message: 'Restaurante excluído com sucesso!' });
        });
    });

    return api;
}
