import React, { useEffect } from 'react'
import useDealMutaion from '../hooks/useDeal'
import { useSelector } from 'react-redux'

const Deal = () => {
    const { getDeal } = useDealMutaion()
    const deals = useSelector(state => state.deals.deals.deals)
    useEffect(() => {
        getDeal.mutateAsync()

    }, [])


    return (
        <div>
            <div className='grid grid-cols-4 gap-5 px-20'>
                {deals?.map((deal, idx) =>

                    <div key={idx} className="card bg-zinc-700 text-primary-content w-96">
                        <div className="card-body">
                            <h2 className="card-title">{deal.title}</h2>
                            <p>{deal.description}</p>
                            <div className="card-actions justify-end">
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

export default Deal