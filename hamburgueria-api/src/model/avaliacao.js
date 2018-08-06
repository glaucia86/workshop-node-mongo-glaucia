/**
 *
 * Arquivo: model/avaliacao.js
 * Data: 05/08/2018
 * Descrição: Arquivo responsável pela classe de modelo do 'Avaliacao'
 * Author: Glaucia Lemos
 *
 */

import mongoose from 'mongoose';
import Hamburgueria from './hamburgueria';

let Schema = mongoose.Schema;

/**
 *  Classe: Avaliacao
 *  id (gerado no momento no post)
 *  titulo: string
 *  pontuacao:  number
 *  texto: string
 *  nome: string
 *  hamburgueria: objectId
 * 
 */

let AvaliacaoSchema = new Schema({
    titulo: {
        type: String,
        required: true
    },
    pontuacao: {
        type: Number
    },
    texto: String,
    nome: String,
    hamburgueria: {
        type: Schema.Types.ObjectId,
        ref: 'Hamburgueria',
        required: true
    }
});

export default mongoose.model('Avalicao', AvaliacaoSchema);