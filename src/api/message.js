import ApiRoutes from "../config/apiRoutes/apiRoutes"
import axiosInstance from "../config/AxiosInstance"

export const performSendMessage = async(data)=>{
    // console.log(data);
    const res = await axiosInstance.post(`${ApiRoutes.SENDMESSAGE.path}`, data)
    return res.data
}
export const performGetAllMessages = async(data)=>{
    const res = await axiosInstance.get(`${ApiRoutes.GETALLMESSAGE.path}/${data}`)
    // console.log(data);
    return res.data
}
export const performMyDealNegotiates = async(data)=>{
    const res = await axiosInstance.get(`${ApiRoutes.MYDEALNEGOTIATES.path}/${data}`)
    // console.log(res.data);
    return res.data
}
export const performMyDealMessages = async(data)=>{
    const res = await axiosInstance.post(`${ApiRoutes.MYDEALMESSAGES.path}`, data)
    // console.log(res.data);
    return res.data
}