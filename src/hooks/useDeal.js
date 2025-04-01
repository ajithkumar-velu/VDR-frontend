import { useMutation } from "@tanstack/react-query"
import { performAddNegotiate, performCreateDeal, performGetDeals, performGetNegotiate, performMydeal } from "../api/deals"
import { useDispatch } from "react-redux"
import { setDeals, setMyDeals, setNegotiates } from "../store/slices/dealsSlice"
import toast from "react-hot-toast"
// import { data } from "react-router-dom"

const useDealMutaion = ()=>{
    const dispatch = useDispatch()

    const getDeal = useMutation({
        mutationFn: performGetDeals,
        onSuccess: (data)=>{
            dispatch(setDeals(data))
        },
        onError: (error)=>{
            console.log("Error in get deals: ", error);
        }
    })

    const getMyDeals = useMutation({
        mutationFn: performMydeal,
        onSuccess: (data) =>{
            dispatch(setMyDeals(data))
        },
        onError: (error)=>{
            console.log("Error in get my deals: ", error);
        }
    })

    const createDeal = useMutation({
        mutationFn: performCreateDeal,
        onSuccess: (data)=>{
            console.log(data);            
            toast.success(data.message)
        },
        onError: (data)=>{
            console.log("Error in create deal: ", data);
        }
    })
    const getNegotiate = useMutation({
        mutationFn: performGetNegotiate,
        onSuccess: (data)=>{
            // dispatch(setNegotiates(data))
        },
        onError: (error)=>{
            console.log("Error in get Negotiate: ", error);
        }
    })
    const addNegotiate = useMutation({
        mutationFn: performAddNegotiate,
        onSuccess: (data)=>{
            toast.success("Negotiation is added")
            dispatch(setNegotiates(data))
        },
        onError: (error)=>{
            console.log("Error in add Negotiate: ", error);
            toast.error(error.response?.data?.message)
        }
    })


    return {getDeal, getMyDeals, createDeal, getNegotiate, addNegotiate}
}
export default useDealMutaion