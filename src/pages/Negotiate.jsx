import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import useMessageMutation from '../hooks/messageSlice'
import useDealMutaion from '../hooks/useDeal'

const Negotiate = () => {
    const [text, setText] = useState("")
    const { dealId } = useParams()
    const messages = useSelector(state => state.messages.messages)
    const user = useSelector(state => state.userInfo.User)
    const { getAllMessage, sendMessage } = useMessageMutation()
    const { getNegotiate } = useDealMutaion()
    const negotiates = useSelector(state => state.deals.negotiates)
    const [uid, setId] = useState()
    const { addNegotiate } = useDealMutaion()
    const navigate = useNavigate()
    const bottomRef = useRef(null)

    useEffect(() => {
        addNegotiate.mutateAsync()
        // getNegotiate.mutate(dealId)
        // console.log(negotiates);
    }, [])

    const handleOnclick = (id) => {
        navigate(`/negotiate/${id}`)
        setId(id)
        getAllMessage.mutateAsync(id)
    }

    const handleSend = async () => {
        await sendMessage.mutateAsync({ text: text, dealId: dealId })
        setText("")
        await getAllMessage.mutateAsync(dealId)
        console.log(text, dealId);
    }

    useEffect(()=>{
        bottomRef.current?.scrollIntoView({ behavior: "smooth"})
    }, [messages])

    return (
        <div className='flex-1 flex flex-col overflow-auto bg-zinc-800 max-w-6xl m-auto w-full' >
            <div className='flex-1 flex w-full overflow-y-auto' >
                {/* Negotiater section */}
                <div className=' bg-gray-800 w-[20%] overflow-y-auto' >
                    {
                        negotiates?.map((item, idx) => (
                            <div onClick={() => handleOnclick(item._id)} key={idx} className='w-full bg-gray-700 mb-1 py-4'  >
                                <div>{item.title}</div>
                            </div>
                        ))
                    }
                </div>
                <div className='flex-1 flex flex-col overflow-y-auto' >
                    <div className=' overflow-y-scroll flex-1 px-5' >

                        {
                            messages?.map((message, idx) => (

                                <div key={idx} className={`mb-2 ${user._id == message.reciverId ? "chat-end" : "chat-start"}`}>

                                    <div className="chat-header">
                                        Obi-Wan Kenobi
                                        <time className="text-xs opacity-50">12:45</time>
                                    </div>
                                    <div className="chat-bubble">{message.text}</div>
                                    <div className="chat-footer opacity-50">Delivered</div>
                                </div>
                            ))
                        }
                        <div ref={bottomRef} ></div>
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

export default Negotiate