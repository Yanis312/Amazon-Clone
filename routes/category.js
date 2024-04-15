import { Router } from 'express';
const routerCategory=Router();
import Categorys from '../models/categorie.js';



//POST REQUEST

routerCategory.post('/category', async (req, res) => {
try {
    let category =new Categorys();
    category.type=req.body.type;

    await category.save();

    res.json({
        sucess: true,
        message:"Success to create a new category"
    })
} catch (error) {
    res.status(500).json({
        sucess: false,
        message: error.message
    });
}
});


//GET REQUEST
routerCategory.get('/category', async (req, res) => {
    try {
        let categories=await Categorys.find();
        res.json({
            sucess: true,
            categories: categories
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            message: error.message
        });
    }
});

export default routerCategory;
