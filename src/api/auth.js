import ApiRoutes from "../config/apiRoutes/apiRoutes.js"
import axiosInstance from "../config/AxiosInstance.js"

export const performSignup = async (data) =>{
    const res = await axiosInstance.post(ApiRoutes.SIGNUP.path, data)
    console.log(res);
    
    return res.data
}
export const performLogin = async(data)=>{
    const res = await axiosInstance.post(ApiRoutes.LOGIN.path, data)
    return res.data
}
export const performLogout = async ()=>{
    const res = await axiosInstance.post(ApiRoutes.LOGOUT.path)
    return res.data
}