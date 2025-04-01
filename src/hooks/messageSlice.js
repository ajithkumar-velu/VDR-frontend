import { useMutation } from "@tanstack/react-query"
import { useDispatch } from "react-redux"
import { performGetAllMessages, performMyDealMessages, performMyDealNegotiates, performSendMessage } from "../api/message"
import toast from "react-hot-toast"
import { setMessages, setMyDealMessages } from "../store/slices/messageSlice"
import { setNegotiates } from "../store/slices/dealsSlice"

const useMessageMutation = ()=>{
    const dispatch = useDispatch()

    const sendMessage = useMutation({
        mutationFn: performSendMessage,
        onSuccess: (data)=>{
            // console.log(data);
            
        },
        onError: (err)=>{
            console.log("Error in send message: ",err);
            toast.error(err.responce?.data?.message)
        }
    })

    const getAllMessage = useMutation({
        mutationFn: performGetAllMessages,
        onSuccess: (data)=>{
            dispatch(setMessages(data))
        },
        onError: (err)=>{
            console.log("Error in get all messages: ",err);
            toast.error(err.responce?.data?.message)
        }
    })

    const myDealNegotiates = useMutation({
        mutationFn: performMyDealNegotiates,
        onSuccess: (data)=>{
            // console.log(data);
            
            dispatch(setNegotiates(data))
        },
        onError: (err)=>{
            console.log("Error in get all messages: ",err);
            toast.error(err.responce?.data?.message)
        }
    })
        const myDealMessages = useMutation({
        mutationFn: performMyDealMessages,
        onSuccess: (data)=>{
            // console.log(data);
            
            dispatch(setMyDealMessages(data))
        },
        onError: (err)=>{
            console.log("Error in my Deal Messages: ",err);
            toast.error(err.responce?.data?.message)
        }
    })

    return { sendMessage, getAllMessage, myDealNegotiates, myDealMessages}
}
export default useMessageMutation   