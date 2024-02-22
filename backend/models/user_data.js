import mongoose from 'mongoose';


const user_Shema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is Required"]
    }
},
    {
        timestamps: true
    })


mongoose.models = {};

export default mongoose.model("user", user_Shema);