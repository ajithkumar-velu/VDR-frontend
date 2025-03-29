import React, { useEffect, useState } from 'react'
import useDealMutaion from '../hooks/useDeal'
import { useSelector } from 'react-redux'

const Mydeals = () => {
    const { getMyDeals, createDeal } = useDealMutaion()
    const deals = useSelector(state => state.deals.mydeals.deals)
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
    console.log(formData);

    return (
        <div>
            <div className='flex items-end justify-end px-20 my-10' >

                {/* <div className='px-4 py-5  btn w-full max-w-fit btn-ghost btn-square bg-base-300 border' >Create Deal</div> */}
                <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Create Deal</button>
            </div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
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
            <div className='grid grid-cols-4 gap-5 px-20'>
                {deals?.map((deal, idx) =>

                    <div key={idx} className="card bg-zinc-700 text-primary-content w-96">
                        <div className="card-body">
                            <h2 className="card-title">{deal.title}</h2>
                            <p>{deal.description}</p>
                            <div className="card-actions justify-end">
                                <button className="btn">₹{deal.status}</button>
                                <button className="btn">₹{deal.price}.00</button>
                                <button className="btn">Buy Now</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}

export default Mydeals