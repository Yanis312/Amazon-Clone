import mongoose from 'mongoose';
const { Schema } = mongoose;

const CategorySchema = new Schema({
   
    type:{type:String, required:true,unique:true},
    
});

const Categorys = mongoose.model('Category', CategorySchema);

export default Categorys;