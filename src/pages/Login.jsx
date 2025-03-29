import React, { useEffect, useState } from 'react'
import useAuthMutations from '../hooks/useAuth'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Login = () => {
    const [formdata, setFormdata] = useState({
        email: "",
        password: "",
    })
    const [isloading, setIsloading] = useState(false)
    const { loginUser } = useAuthMutations()
    const user = useSelector((state)=>state.userInfo)
    console.log(user);
    

    const handleOnchange = async (e) => {
        const { name, value } = e.target
        setFormdata({ ...formdata, [name]: value })
        
    }
    const handleSubmit = async ()=>{
        setIsloading(true)
        try {
            await loginUser.mutateAsync(formdata)
        } finally{
            setIsloading(false)
        }
    }
    
    // useEffect(() => {
    //     console.log(formdata);
    // }, [handleOnchange])
    return (
        <div className='max-w-md m-auto flex items-center justify-center w-full h-screen' >
            <fieldset className="fieldset w-full bg-base-200 border border-base-300 p-4 rounded-box pb-14">
                <div className="text-4xl font-semibold text-center py-7">Login</div>


                <label className="fieldset-label">Email</label>
                <input name='email' onChange={handleOnchange} value={FormData.email} type="email" className="input w-full" placeholder="Email" />

                <label className="fieldset-label">Password</label>
                <input name='password' onChange={handleOnchange} value={FormData.password} type="text" className="input w-full" placeholder="Password" />

                <p className='text-end' >Don't have an account? <Link to={"/signup"} className='text-blue-600' >Sign up</Link></p>
                <button onClick={handleSubmit} className="btn btn-neutral mt-4">Login{
                    isloading && <span className="loading loading-dots loading-xs"></span>}
                </button>
            </fieldset>
        </div>
    )
}

export default Login