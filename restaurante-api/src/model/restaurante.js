/**
 *
 * Arquivo: model/restarante.js
 * Data: 05/08/2018
 * Descrição: Arquivo responsável pela classe de modelo do 'Restaurante'
 * Author: Glaucia Lemos
 *
 */

import mongoose from 'mongoose';
let Schema = mongoose.Schema;

/**
 *  Classe: Restaurante
 * 
 *  id (gerado automaticamente via MongoDb - GUID)
 *  nome: string
 *  endereco: string
 *  categoria: string
 *  telefone: string,
 *  
 */

let RestauranteSchema = new Schema({
    nome: String,
    endereco: String,
    categoria: String,
    telefone: String
});

export default mongoose.model('Restaurante', RestauranteSchema);