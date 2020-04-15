const express = require('express'); 
const cors = require('cors');
const routes = require('./routes');
const app = express();


/*
* npm install nodemon -D, criado no package.json o comando npm start com o nodemon, no qual o back re-starta automaticamente ao salvar
*/

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

