
import { toast } from "react-toastify";
import { LoginUser, RegisterUser } from "../../services/login_services/login_services";


export const RegisterAction = (data, navigate) => async (dispatch) => {
    try {
        const response = await RegisterUser(data);
        navigate("/")
        toast.success("success");
    }
    catch (err) {
        toast.success("Email Already Exists");
    }
}

export const LoginAction = (data, navigate) => async (dispatch) => {
    try {
        const response = await LoginUser(data);
        localStorage.setItem("accesstoken", JSON.stringify(response?.data?.token));
        localStorage.setItem("userid", JSON.stringify(response?.data?.users?._id));
        navigate("/dashboard")
        toast.success("User Login SuccessFukky");
    }
    catch (err) {
        toast.success("Email Already Exists");
    }
}