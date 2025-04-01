import { useSelector } from 'react-redux'
import CreateDeal from '../components/CreateDeal'
import { Link, useNavigate } from 'react-router-dom'
import useDealMutaion from '../hooks/useDeal'
import { useEffect, useRef, useState } from 'react'
import useMessageMutation from '../hooks/messageSlice'

const Mydeals = () => {

    const deals = useSelector(state => state.deals.mydeals.deals)
    const navigate = useNavigate()
    const [dId, setDId] = useState()
    const { addNegotiate } = useDealMutaion()
    const { myDealNegotiates, myDealMessages, sendMessage } = useMessageMutation()
    const ne = useSelector(state => state.deals.negotiates)
    const dealMessages = useSelector(state => state.messages.myDealMessages)
    const user = useSelector(state => state.userInfo.User)
    const [text, setText] = useState("")
    const [messageSenderId, setMessageSenderId] = useState()
    const bottomRef = useRef(null);

    const handleOnclick = (data) => {
        setDId(data)
        myDealNegotiates.mutateAsync(data)
    }

    const handleContactClick = (id) => {
        setMessageSenderId(id)
        myDealMessages.mutateAsync({ dealId: dId, senderId: id })
    }

    const handleSend = async () => {
        await sendMessage.mutateAsync({ text: text, dealId: dId, senderId: messageSenderId })
        setText("")
        await myDealMessages.mutateAsync({ dealId: dId, senderId: messageSenderId })
    }

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      }, [dealMessages]);
    
    return (
        <div className='flex-1 flex flex-col overflow-auto' >
            <div className='flex items-end justify-end px-20 my-10' >
                <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Create Deal</button>
            </div>

            <CreateDeal />

            <div className='flex-1 flex overflow-auto gap-2' >
                {/* deals */}
                <div className=' h-full bg-base-300'>
                    {deals?.map((deal, idx) =>
                        <div key={idx} className="card bg-zinc-700 text-primary-content w-96 mb-1">
                            <div className="card-body flex flex-col">
                                <h2 className="card-title">{deal.title}</h2>
                                <p>{deal.description}</p>
                                <div className="card-actions justify-end w-full">
                                    <button className="btn">{deal.status}</button>
                                    <button className="btn">₹{deal.price}.00</button>
                                    <div onClick={() => handleOnclick(deal._id)} className="btn w-fit">
                                        Negotiate <div className="badge badge-xs badge-accent">{deal.negotiate.length}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                {/* negotiaters */}
                <div className='bg-base-300 h-full max-w-sm w-full' >
                    {ne?.map((item, idx) => (
                        <div key={idx} className='mb-1 py-3 bg-gray-700' onClick={() => handleContactClick(item._id)} >
                            <div className='w-full  text-center'>{item.fullname}</div>
                        </div>
                    ))}
                    {ne && ne.length === 0 && <div className='text-center mt-5' >No data found</div>}
                </div>

                {/* chat messages */}
                <div className="flex-1 flex flex-col overflow-auto bg-base-300" >
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll"  >
                        {
                            dealMessages?.map((message, idx) => (
                                <div key={idx} className={`mb-2 ${user._id === message.reciverId ? "chat-end" : "chat-start"} px-10`}>
                                    <div className="chat-header">
                                        Obi-Wan Kenobi
                                        <time className="text-xs opacity-50">12:45</time>
                                    </div>
                                    <div className="chat-bubble">{message.text}</div>
                                    <div className="chat-footer opacity-50">Delivered</div>
                                </div>
                            ))
                        }
                        <div ref={bottomRef}></div>
                    </div>
                    <div className='bg-base-300 px-20 w-full py-5' >
                        <div className='flex' >
                            <input type="text" value={text} onChange={(e) => setText(e.target.value)} className='w-full input' placeholder="Type here.." required />
                            <button onClick={handleSend} className="btn btn-accent">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mydeals