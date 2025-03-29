import React, { useEffect, useState } from 'react'
import useAuthMutations from '../hooks/useAuth'
import { Link } from 'react-router-dom'

const Signup = () => {
    const [formdata, setFormdata] = useState({
        fullname: "",
        email: "",
        password: "",
        role: ""
    })
    const [isloading, setIsloading] = useState(false)
    const { signupUser } = useAuthMutations()
    const handleOnchange = (e) => {
        const { name, value } = e.target
        setFormdata({ ...formdata, [name]: value })
    }
    const handleSubmit = async () => {
        setIsloading(true)
        try {
            console.log(formdata);

            await signupUser.mutateAsync(formdata)
        } finally {
            setIsloading(false)
        }
    }
    // useEffect(()=>{
    //     console.log(formdata);
    // }, [handleOnchange])
    return (
        <div className='max-w-md m-auto flex items-center justify-center w-full h-screen' >
            <fieldset className="fieldset w-full bg-base-200 border border-base-300 p-4 rounded-box pb-14">
                <div className="text-4xl font-semibold text-center py-7">Sign up</div>

                <label className="fieldset-label">Fullname</label>
                <input name='fullname' onChange={handleOnchange} value={FormData.fullname} type="email" className="input w-full" placeholder="Fullname" />

                <label className="fieldset-label">Email</label>
                <input name='email' onChange={handleOnchange} value={FormData.email} type="email" className="input w-full" placeholder="Email" />

                <label className="fieldset-label">Password</label>
                <input name='password' onChange={handleOnchange} value={FormData.password} type="password" className="input w-full" placeholder="Password" />

                <select name='role' onChange={handleOnchange} value={FormData.role} defaultValue="Select Role" className="select select-neutral w-full mt-3">
                    <option disabled={true}>Select Role</option>
                    <option>Buyer</option>
                    <option>Seller</option>
                </select>
                <p className='text-end' >Already have an account?<Link to={"/login"} className='text-blue-600' > Login</Link></p>
                <button onClick={handleSubmit} className="btn btn-neutral mt-4">Sign up{
                    isloading && <span className="loading loading-dots loading-xs"></span>}
                </button>
            </fieldset>
        </div>
    )
}

export default Signup