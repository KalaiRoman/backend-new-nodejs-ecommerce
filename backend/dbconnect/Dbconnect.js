import mongoose from "mongoose";

const ConnectDb = async () => {
    try {

        mongoose.connect(process.env.MONGOOSEKEY).then((res) => {
            console.log("DB Connected new wel");
        }).catch((err) => {
            console.log(err);
        })

    }
    catch (err) {
        console.log("Db Connect Error");
    }
}


export default ConnectDb;