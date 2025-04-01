import React, { useEffect } from 'react'
import useDealMutaion from '../hooks/useDeal'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Deal = () => {
    const { getDeal } = useDealMutaion()
    const deals = useSelector(state => state.deals.deals.deals)
    const navigate = useNavigate()
    const { addNegotiate } = useDealMutaion()
    useEffect(() => {
        getDeal.mutateAsync()
        
        console.log(deals);
    }, [])

    const handleOnclick = (id)=>{
        addNegotiate.mutateAsync({dealId: id})
        console.log(id);
        
        navigate(`/negotiate/${id}`)
    }


    return (
        <div>
            <div className='grid grid-cols-4 gap-5 px-20 mt-10'>
                {deals?.map((deal, idx) =>

                    <div key={idx} className="card bg-zinc-700 text-primary-content w-96">
                        <div className="card-body">
                            <h2 className="card-title">{deal.title}</h2>
                            <p>{deal.description}</p>
                            <div className="card-actions justify-end">
                                <button className="btn">₹{deal.price}.00</button>
                                {/* <button onClick={()=>navigate(`/negotiate/${deal._id}/${deal.seller? deal.seller : deal.buyer}`)} className="btn">Negotiate or Buy</button> */}
                                <button onClick={()=>handleOnclick(deal._id)} className="btn">Negotiate or Buy</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Deal