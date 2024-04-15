import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  address: { type: Schema.Types.ObjectId, ref: 'Address' }
});

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;