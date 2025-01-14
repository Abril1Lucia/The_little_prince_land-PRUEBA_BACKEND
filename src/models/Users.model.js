import mongoose from "mongoose";




const userSchema = new mongoose.Schema ({
    image:{type: String, required:false},
    fullName: {type: String, required:true},
    email: {type: String, required:true, unique:true},
    password: {type: String, required:true},
    phone: {type: Number, required: true}
});

export const userModel = mongoose.model('user', userSchema);