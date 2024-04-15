import { Router } from 'express';
const routerProduct=Router();
import Produit from '../models/produit.js'
import upload from '../middlewares/upload-photo.js';


/*
   title:String,
    description:String,
    photo:String,
    price:Number,
    stockQuantity:Number,*/

//POST Request-create a new produuit
routerProduct.post('/products',upload.single("photo"), async (req, res) => {
    try {
      console.log('Données reçues dans la requête POST :', req.body);
  
      let product = new Produit();
      product.owners = req.body.ownersID;
      product.category = req.body.categoryID;
      product.title = req.body.title;
      product.description = req.body.description;
      product.photo = req.file.location;
      product.price = req.body.price;
      product.stockQuantity = req.body.stockQuantity;
    
  
      console.log('Propriétés du produit avant la sauvegarde :', product);
  
      await product.save();
  
      console.log('Produit sauvegardé avec succès :', product);
  
      res.json({
        status: true,
        message: 'Success'
      });
    } catch (err) {
      console.error('Erreur lors de la création du produit :', err);
      res.status(500).json({
        status: false,
        message: 'Erreur lors de la création du produit. Veuillez vérifier les données.'
      });
    }
  });








//get Request-get all products

routerProduct.get('/products', async (req, res) => {
  try {
      let produits=await Produit.find();
      res.json({
          sucess: true,
          produits: produits
      })
  } catch (error) {
      res.status(500).json({
          sucess: false,
          message: error.message
      });
  }
});


//get Request-get a single products

routerProduct.get('/products/:id', async (req, res) => {
  try {
      let produits=await Produit.findOne({_id: req.params.id});
      res.json({
          sucess: true,
          produits: produits
      })
  } catch (error) {
      res.status(500).json({
          sucess: false,
          message: error.message
      });
  }
});


//put Request-update a single products
routerProduct.put('/products/:id', upload.single('photo'),async (req, res) => {
  try {
    console.log('Données reçues dans la requête PUT :', req.body);

      let produit=await Produit.findOneAndUpdate({_id: req.params.id},{
        $set:{
          title:req.body.title,
          price:req.body.price,
          category:req.body.categoryID,
          photo:req.file.location,
          description:req.body.description,
          owner:req.body.ownerID
         

          
        }
        
      },
      
      //upsert si le id rechercher nexiste pas cree un nouveau object
      {upsert:true}
      
      );
      res.json({
          sucess: true,
          updatedProduit: produit
      });
  } catch (error) {
      res.status(500).json({
          sucess: false,
          message: error.message
      });
  }
});



//DELETE Request-delete a single products
routerProduct.delete('/products/:id', async (req, res) => {
try {
  let deletedProduct=await Produit.findOneAndDelete({_id:req.params.id});
  if(deletedProduct){
    res.json({
      status:true,
      message: 'Product deleted'
    })
  }
} catch (error) {
  res.status(500).json({
    sucess: false,
    message: error.message
});
}
}
)

export default routerProduct;