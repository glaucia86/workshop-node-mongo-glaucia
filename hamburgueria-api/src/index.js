// Importar alguns pacotes para o nosso projeto:

import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import passport from 'passport';
import config from './config';
import routes from './routes';
const LocalStrategy = require('passport-local').Strategy;

let app = express();
app.server = http.createServer(app);

// Configuração do Parser (application/json):
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuração da Autenticação:
app.use(passport.initialize());

let conta = require('./model/conta');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'senha'    
},
    conta.authenticate()
));

// Aqui vamos precisar serializar e deserializar o usuario: 
passport.serializeUser(conta.serializeUser());
passport.deserializeUser(conta.deserializeUser());

// Rotas da API v1 (/v1):
app.use('/v1', routes);

app.server.listen(config.port);
console.log(`Aplicação sendo executada na porta ${app.server.address().port}`);

export default app;