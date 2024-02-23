import auth_shema from "../../models/auth_shema.js";



export const createUser = async (req, res, next) => {

    console.log(req.body);
    const { email, userName, password } = req.body;

    try {
        const exisitingUser = await auth_shema.findOne({ email });
        if (exisitingUser) {
            next("Email Already Register Please Login");
        }
        const user = await auth_shema.create({ userName, email, password });
        //token
        res.status(201).send({
            sucess: true,
            message: "User Created Successfully",
            user
        });
    } catch (error) {
        next(error);

    }


}