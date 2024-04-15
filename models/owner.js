import mongoose from 'mongoose';
const { Schema } = mongoose;

const OwnerSchema = new Schema({
   
    name:String,
    about:String,
    photo:String,

    
});

const Owners = mongoose.model('Owner', OwnerSchema);

export default Owners;