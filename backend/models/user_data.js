import mongoose from 'mongoose';



const postSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "auth",
    },
    message: {
        type: String,
        required: true
    },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});
const postSchemaLike = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "auth",
    },
    like: {
        type: String,
        required: true,
        enum: ["👍like", "❤️heart", "🥰love", "😆smile", "😃happy", "🥲sad", "😡angry"]
    },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});
const user_Shema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is Required"]
    },
    postusers: [postSchema],
    postlike: [postSchemaLike],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "auth",
    },

},
    {
        timestamps: true
    })


mongoose.models = {};

export default mongoose.model("user", user_Shema);