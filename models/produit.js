import mongoose from 'mongoose';
const { Schema } = mongoose;

const produitSchema = new Schema({
    category:{type:Schema.Types.ObjectId, ref:"categories"},
    owners:{type:Schema.Types.ObjectId, ref:"owners"},
    title:String,
    description:String,
    photo:String,
    price:Number,
    stockQuantity:Number,
    rating:[Number]
});

const Produit = mongoose.model('product', produitSchema);

export default Produit;