/**
 *
 * Arquivo: model/hamburgueria.js
 * Data: 05/08/2018
 * Descrição: Arquivo responsável pela classe de modelo do 'Hamburgueria'
 * Author: Glaucia Lemos
 *
 */

import mongoose from 'mongoose';
import Avaliacao from './avaliacao'; // incluímos para que haja relacionamento entre ambas as classes

let Schema = mongoose.Schema;

/** == Classe Hamburgueria ==
 * 
 *  Id (gerado no momento do post)
 *  nome: string
 *  tipoHamburguer: string
 *  preco: number
 *  geometria 
 *  avaliacoes: string
 *  endereco: string
 *  telefone: string
 * 
 *  **/

let HamburgueriaSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    tipoHamburguer: {
        type: String,
        required: true
    },
    preco: Number,
    geometria: {
        type: { type: String, default: 'Ponto' },
        coordinates: [Number]
    },
    avaliacoes: [{ 
        type: Schema.Types.ObjectId,
        ref: 'Avaliacao'
     }],
    endereco: String,    
    telefone: String
});

export default mongoose.model('Hamburgueria', HamburgueriaSchema);
