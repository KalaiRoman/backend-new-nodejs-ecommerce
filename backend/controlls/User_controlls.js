import user_data from "../models/user_data.js";
export const createUserName = async (req, res, next) => {
    try {
        const { name, user } = req.body;
        const response = await user_data.create({ name, user });
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
            const response = await user_data.find({}).skip(skip).limit(limit).sort({ name: -1 }).populate("user");
            const countdata = await user_data.countDocuments();
            const showDatapage = `${page * limit - 10} to ${(limit * page)}`
            res.status(200).json({ message: "Success", count: countdata, page: page, showdata: showDatapage, limit: limit, data: response })
        }
    } catch (error) {
        console.log(error)
    }
}

// export const 

export const postCreateuser = async (req, res, next) => {
    try {
        const { user, message, id } = req.body;
        const data = {
            user: user,
            message: message,
            id: id
        }
        const response = await user_data.findByIdAndUpdate({ _id: id }, { $push: { postusers: data } }, { new: true });
        res.status(200).json({ message: "update one user post method", response })
    } catch (error) {

    }
}

export const postDeleteuser = async (req, res, next) => {
    try {
        const { user, postid } = req.body;
        const updatedUserData = await user_data.findByIdAndUpdate(
            { _id: user },
            { $pull: { postusers: { _id: postid } } }, // Remove the post with the specified ID
            { new: true }
        );
        res.status(200).json({ message: "Post deleted successfully", updatedUserData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}
// like person
export const postLikeuser = async (req, res, next) => {
    try {
        const { user, like, id } = req.body;
        const data = {
            user: user,
            like: like
        }
        const response = await user_data.findByIdAndUpdate({ _id: id }, { $push: { postlike: data } }, { new: true });
        res.status(200).json({ message: "updated Like User", response })
    } catch (error) {

    }
}
// update ppost like data
export const postUpdateLikeuser = async (req, res, next) => {
    try {
        const { id, like, likeid } = req.body;
        const response = await user_data.findById({ _id: id });
        const filterdata = response?.postlike?.find((item) => item?._id == likeid);
        filterdata.like = like
        await response.save({ validateBeforeSave: false });
        res.status(200).json({ message: "Updated Like", filterdata })
    } catch (error) {
    }
}
// delete like
export const postDeleteLikeuser = async (req, res, next) => {
    try {
        const { likeid, id } = req.body;
        const response = await user_data.findByIdAndUpdate({ _id: id }, { $pull: { postlike: { _id: likeid } } }, { new: true });
        res.status(200).json({ message: "Updated Like", response })
    } catch (error) {
    }
}
