/**
 *
 * Arquivo: db.js
 * Data: 05/08/2018
 * Descrição: Arquivo responsável por manipular a configuração da base de dados (Mongodb)
 * Author: Glaucia Lemos
 *
 */

import mongoose from 'mongoose';
import config from './config';

export default callback => {
    let db = mongoose.connect(config.mongoUrl, { useNewUrlParser: true });
    callback(db);
}
