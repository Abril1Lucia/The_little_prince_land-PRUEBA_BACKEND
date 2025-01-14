import mongoose from "mongoose";




const adminSchema = new mongoose.Schema ({
    image:{type: String, required: true},
    fullname: {type: String, required:true},
    email: {type: String, required:true, unique:true},
    password: {type: String, required:true},
    role: {type: String, default: 'admin'}
});

export const adminModel = mongoose.model('admin', adminSchema);