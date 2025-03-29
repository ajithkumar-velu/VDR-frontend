import { useMutation } from "@tanstack/react-query"
import { performCreateDeal, performGetDeals, performMydeal } from "../api/deals"
import { useDispatch } from "react-redux"
import { setDeals, setMyDeals } from "../store/slices/dealsSlice"
import toast from "react-hot-toast"

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


    return {getDeal, getMyDeals, createDeal}
}
export default useDealMutaion