/**
 *
 * Arquivo: model/conta.js
 * Data: 05/08/2018
 * Descrição: Arquivo responsável pela classe de modelo da 'Conta'
 * Author: Glaucia Lemos
 * Link (diferentes tipos em Mongoose): http://mongoosejs.com/docs/guide.html
 *
 */

import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

let Schema = mongoose.Schema;

/** == Classe Conta ==
 * 
 *  Id (gerado no momento do post)
 *  email: string
 *  senha: string
 * 
 *  **/

let ContaSchema = new Schema({
    email: String,
    senha: String   
});

ContaSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('Conta', ContaSchema);