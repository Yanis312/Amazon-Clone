// Aller chercher les configurations de l'application
import 'dotenv/config';

// Importer les fichiers et librairies
import express, { json } from 'express';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import cspOption from './csp-options.js'
import morgan from 'morgan'
import bodyParser from 'body-parser'

// Création du serveur
const app = express();

// Ajout de middlewares
app.use(helmet(cspOption));
app.use(compression());
app.use(cors());
app.use(json());
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));



// Ajouter les routes ici ...

app.get('/', (req,res)=>{
res.json("Hello Amazon Clone")
});


app.post('/', (req,res)=>{
    console.log(req.body.name);
})


// Renvoyer une erreur 404 pour les routes non définies
app.use(function (request, response) {
    // Renvoyer simplement une chaîne de caractère indiquant que la page n'existe pas
    response.status(404).send(request.originalUrl + ' not found.');
});

// Démarrage du serveur
app.listen(process.env.PORT);
console.info(`Serveurs démarré:`);
console.info(`http://localhost:${ process.env.PORT }`);
