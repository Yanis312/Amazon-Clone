import { Router } from 'express';
const routerOwner=Router();
import Owners from '../models/owner.js';
import upload from '../middlewares/upload-photo.js';


//POST REQUEST

routerOwner.post('/owner', upload.single("photo"),async (req, res) => {
    try {
        let owners =new Owners();
        owners.name=req.body.name;
        owners.about=req.body.about;
        owners.photo=req.file.location
    
        await owners.save();
    
        res.json({
            sucess: true,
            message:"Success to create a new Owner"
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            message: error.message
        });
    }
    });


//GET REQUEST
routerOwner.get('/owner', async (req, res) => {
    try {
        let owners=await Owners.find();
        res.json({
            sucess: true,
            owners: owners
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            message: error.message
        });
    }
});


    export default routerOwner;