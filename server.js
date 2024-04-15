// Aller chercher les configurations de l'application
import mongoose from 'mongoose';
import 'dotenv/config';

// Importer les fichiers et librairies
import express, { json, response } from 'express';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import cspOption from './csp-options.js'
import morgan from 'morgan'
import bodyParser from 'body-parser'

import routerProduct from './routes/produits.js';
import routerCategory from './routes/category.js';
import routerOwner from './routes/owner.js';


//import Produit from './models/produits.js';
//const User=require('./models/user')



// Création du serveur
const app = express();

mongoose.connect(process.env.DATABASE,
)
  .then(() => {
    console.log('Connection established');
    
  })
  .catch((err) => {
    console.log(err);
    
  });




// Ajout de middlewares
app.use(helmet(cspOption));
app.use(compression());
app.use(cors());
app.use(json());
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(routerProduct);
app.use(routerCategory);
app.use(routerOwner);
app.use(bodyParser.urlencoded({extended:false}));



// Ajouter les routes ici ...

/*app.get('/', (req,res)=>{
res.json("Hello Amazon Clone")
});


app.post('/', async (req, res) => {
    try {
      const user = new UserModel();
      user.name = req.body.name;
      user.email = req.body.email;
      user.password = req.body.password;
      await user.save();
      res.json('saved successfully');
    } catch (err) {
      res.json(err);
    }
  });*/

  


  //les APIs





// Renvoyer une erreur 404 pour les routes non définies
app.use(function (request, response) {
    // Renvoyer simplement une chaîne de caractère indiquant que la page n'existe pas
    response.status(404).send(request.originalUrl + ' not found.');
});

// Démarrage du serveur
app.listen(process.env.PORT);
console.info(`Serveurs démarré:`);
console.info(`http://localhost:${ process.env.PORT }`);
