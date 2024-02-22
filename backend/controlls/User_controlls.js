import user_data from "../models/user_data.js";

export const createUserName = async (req, res, next) => {
    try {

        const { name } = req.body;
        const response = await user_data.create({ name });
        res.status(201).json({ message: response })

    } catch (error) {

    }
}

export const getUserName = async (req, res, next) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const skip = (page - 1) * limit;
        const search = req.query.search;


        if (search?.length > 2) {
            const response = await user_data.find({ name: { $in: [search] } }).skip(skip).limit(limit).sort({ name: -1 });
            const countdata = await user_data.countDocuments();
            const showDatapage = `${page * limit - 10} to ${(limit * page)}`
            res.status(200).json({ message: "Success", count: countdata, page: page, showdata: showDatapage, limit: limit, data: response })
        }
        else {
            const response = await user_data.find({}).skip(skip).limit(limit).sort({ name: -1 });
            const countdata = await user_data.countDocuments();
            const showDatapage = `${page * limit - 10} to ${(limit * page)}`
            res.status(200).json({ message: "Success", count: countdata, page: page, showdata: showDatapage, limit: limit, data: response })
        }



    } catch (error) {
        console.log(error)
    }
}