/**
 *
 * Arquivo: controller/hamburgueriaController.js
 * Data: 05/08/2018
 * Descrição: Arquivo responsável por manipular as rotas controllers dos endpoints
 * do hamburgueria.
 * Author: Glaucia Lemos
 *
 */

import mongoose from 'mongoose';
import { Router } from 'express';
import Hamburgueria from '../model/hamburgueria';
import bodyParser from 'body-parser';
import Avaliacao from '../model/avaliacao';

import { authenticate } from '../middleware/authMiddleware';

export default({ config, db }) => {
    let api = Router();

    // 1) Método (POST): Criar Hamburgueria: 'http://localhost:4000/v1/hamburgueria/adicionarHamburgueria'
    api.post('/adicionarHamburgueria', authenticate, (req, res) => {
        let novaHamburgueria = new Hamburgueria();

        // Aqui vamos setar os campos do hamburgueria (via request):
        novaHamburgueria.nome = req.body.nome;
        novaHamburgueria.tipoHamburguer = req.body.tipoHamburguer;
        novaHamburgueria.preco = req.body.preco;
        novaHamburgueria.geometria.coordinates = req.body.geometria.coordinates;
        novaHamburgueria.endereco = req.body.categoria;
        novaHamburgueria.telefone = req.body.telefone;

        novaHamburgueria.save(error => {
            if(error) {
                res.send('Erro ao tentar salvar a hamburgueria...: ' + error);
            }
            res.json({ message: 'Hamburgueria adicionada com sucesso!' });
        });
    });

    // 2) Método (GET): Selecionar Todas hamburguerias: 'http://localhost:4000/v1/hamburgueria
    api.get('/', (req, res) => {
        Hamburgueria.find({}, (error, hamburguerias) => {
            if (error) {
                res.send('Erro ao tentar selecionar a hamburgueria...: ' + error);
            }
            res.json(hamburguerias)
        });
    });

    // 3) Método (GET): Selecionar Hamburgueria por Id: 'http://localhost:4000/v1/hamburgueria/:id
    api.get('/:id', (req, res) => {
        Hamburgueria.findById(req.params.id, (error, hamburgueria) => {
            if (error) {
                res.send('Erro ao tentar selecionar a hamburgueria...: ' + error);
            }
            res.json(hamburgueria);
        });
    });

    // 4) Método (PUT): Atualizar hamburgueria por Id: 'http://localhost:4000/v1/hamburgueria/:id
    api.put('/:id', (req, res) => {
        Hamburgueria.findById(req.params.id, (error, hamburgueria) => {
            if (error) {
                res.send('Erro ao tentar selecionar a hamburgueria...: ' + error);
            }

            hamburgueria.nome = req.body.nome;
            hamburgueria.tipoHamburguer = req.body.tipoHamburguer;
            hamburgueria.preco = req.body.preco;
            hamburgueria.geometria.coordinates = req.body.geometria.coordinates;
            hamburgueria.endereco = req.body.categoria;
            hamburgueria.telefone = req.body.telefone;

            hamburgueria.save(error => {
                if(error) {
                    res.send('Erro ao tentar atualizar a hamburgueria...: ' + error);
                }
                res.json({ message: 'Hamburgueria atualizada com sucesso!' });
            });
        });
    });

    // 5) Método (DELETE): Excluir hamburgueria por Id: 'http://localhost:4000/v1/hamburgueria/:id
    api.delete('/:id', (req, res) => {
        Hamburgueria.remove({
            _id: req.params.id           
        }, (error, hamburgueria) => {
            if (error) {
                res.send('Erro ao tentar deletar a hamburgueria...: ' + error);
            }
            res.json({ message: 'Hamburgueria excluída com sucesso!' });
        });
    });

    // 6) Método (POST): Adicionar uma Avaliacao -> Hamburgueria (Id): 'http://localhost:4000/v1/hamburgueria/avaliacoes/adicionar/:id'
    api.post('/avaliacoes/adicionar/:id', (req, res) => {
        Hamburgueria.findById(req.params.id, (error, hamburgueria) => {
            if (error) {
                res.send('Erro ao tentar localizar uma avaliação da hamburgueria...: ' + error);
            }

            let novaAvaliacao = new Avaliacao();

            novaAvaliacao.titulo = req.body.titulo;
            novaAvaliacao.pontuacao = req.body.pontuacao;
            novaAvaliacao.texto = req.body.texto;
            novaAvaliacao.nome = req.body.nome;
            novaAvaliacao.hamburgueria = hamburgueria._id;

            novaAvaliacao.save(error => {
                if (error) {
                    res.send('Erro ao tentar adicionar uma avaliação da hamburgueria...: ' + error);
                }

                hamburgueria.avaliacoes.push(novaAvaliacao);
                hamburgueria.save(error => {
                    if (error) {
                        res.send('Erro ao tentar adicionar uma avaliação da hamburgueria...: ' + error);
                    }

                    res.json({ message: 'Avaliação da hamburgueria gravada com sucesso!' });
                });
            });
        });
    });

    // 7) Método (GET): Retornar uma Determinada Avaliacao -> Hamburgueria (Id): 'http://localhost:4000/v1/hamburgueria/avaliacoes/:id'
    api.get('/avaliacoes/:id', (req, res) => {
        Avaliacao.find({ hamburgueria: req.params.id }, (error, avaliacoes) => {
            if (error) {
                res.send('Erro ao tentar localizar uma avaliação da hamburgueria por Id...: ' + error);    
            }

            res.json(avaliacoes);
        });
    });

    return api;
}

