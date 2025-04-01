import React, { useEffect, useState } from 'react'
import useDealMutaion from '../hooks/useDeal'

const CreateDeal = () => {
    const { getMyDeals, createDeal } = useDealMutaion()
    const [formData, setFromData] = useState({
        title: "",
        description: "",
        price: "",
    })
    const handleOnchange = async (e) => {
        const { name, value } = e.target
        setFromData({ ...formData, [name]: value })
    }
    const handleOnSubmit = () => {
        createDeal.mutateAsync(formData)
        getMyDeals.mutateAsync()
        setFromData({ title: "", description: "", price: "" })
    }
    useEffect(() => {
        getMyDeals.mutateAsync()
    }, [])
    return (
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-xl">Create Deal</h3>
                <fieldset className="fieldset w-full bg-base-200 border border-base-300 p-4 py-7 rounded-box my-5 flex flex-col justify-center">

                    <label className="fieldset-label">Title</label>
                    <input name='title' value={formData.title} onChange={handleOnchange} type="text" className="input w-full mb-3" placeholder="Type deal title..." />

                    <label className="fieldset-label">Description</label>
                    <input name='description' value={formData.description} onChange={handleOnchange} type="text" className="input w-full mb-3" placeholder="Type deal description..." />

                    <label className="fieldset-label">Price</label>
                    <input name='price' value={formData.price} onChange={handleOnchange} type="text" className="input w-full" placeholder="Type deal price..." />

                </fieldset>
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button onClick={handleOnSubmit} className="btn">Save</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}

export default CreateDeal