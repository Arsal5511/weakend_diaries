import React, { useEffect, useState } from 'react'
import faq from '../api/faq.json'
import FaqList from '../components/UI/FaqList'

const Faq = () => {
    const [data, setData] = useState([])
    const [isActive, setIsActive] = useState(false)


    useEffect(() => {
        setData(faq)
    }, [])

    const handleClick = (id) => {
        setIsActive(prevId => prevId === id ? null : id)

    }
    return (
        <div className='mx-auto h-screen max-w-screen-xl text-center my-6'  >
            <h1 className='text-5xl my-7 font-bold'>FAQ's</h1>
            <ul className='flex justify-center items-center flex-col'>
                {
                    data.map((faq) => {
                        return (
                            <FaqList
                                key={faq.id}
                                faq={faq}
                                isActive={isActive === faq.id}
                                handleClick={handleClick}

                            />
                        )
                    })
                }
            </ul>

        </div>
    )
}

export default Faq
