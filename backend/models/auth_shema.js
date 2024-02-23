import mongoose from 'mongoose';


const auth_Shema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "UserName is Required"]
    },
    email: {
        type: String,
        required: [true, "Email is Required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is Required"],
        min: 5,
        max: 8
    }
},
    {
        timestamps: true
    })


mongoose.models = {};

export default mongoose.model("auth", auth_Shema);