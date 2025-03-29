import { useMutation } from "@tanstack/react-query"
import { performLogin, performLogout, performSignup } from "../api/auth.js"
import toast from "react-hot-toast"
import { useDispatch } from "react-redux"
import { clearCredentials, setCredentials } from "../store/slices/authSlice.js"
import { useNavigate } from "react-router-dom"



const useAuthMutations = ()=>{
    const dispatch = useDispatch()
    const navigae = useNavigate()

    const signupUser = useMutation({
        mutationFn: performSignup,
        onSuccess: (data)=>{
            toast.success(data.message)
            navigae('/login')
        },
        onError: (error)=>{
            toast.error(error.response?.data?.message)
            console.log("Error in signup mutaion: ", error.message);
        }
    })

    const loginUser = useMutation({
        mutationFn: performLogin,
        onSuccess: (data)=>{
            toast.success(data.message)
            dispatch(setCredentials(data))
            navigae('/')
        },
        onError: (error)=>{
            console.log("Error in login mutation: ", error.message);
            toast.error(error.response?.data?.message)
        }
    })
    
    const logoutUser = useMutation({
        mutationFn: performLogout,
        onSuccess: (data)=>{
            toast.success(data.message)
            dispatch(clearCredentials())
            navigae("/login")
            console.log(data.message);
        }, 
        onError: (error)=>{
            toast.error(error.response?.data?.message)
            console.log("Error in logout mutation", error.message);
        }
    })
    return { signupUser, loginUser, logoutUser}
}
export default useAuthMutations;