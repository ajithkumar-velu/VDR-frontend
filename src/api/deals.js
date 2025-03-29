import axiosInstance from "../config/AxiosInstance"
import ApiRoutes from "../config/apiRoutes/apiRoutes"

export const performGetDeals = async ()=>{
    const res = await axiosInstance.get(ApiRoutes.GETDEALS.path)
    return res.data
}

export const performCreateDeal = async (data)=>{
    const res = await axiosInstance.post(ApiRoutes.CREATEDEAL.path, data)
    return res.data
}

export const performMydeal = async ()=>{
    const res = await axiosInstance.get(ApiRoutes.GETMYDEALS.path)
    return res.data
}