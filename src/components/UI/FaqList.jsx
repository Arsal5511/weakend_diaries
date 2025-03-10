import React from 'react'

const FaqList = ({ faq, handleClick, isActive }) => {
    const { answer, question, id } = faq
    return (
        <>
            <li className='w-[90%] bg-gray-100 px-5 my-1 md:w-[70%] border-gray-400'>
                <div className=' my-5 flex justify-between items-center gap-4'>
                    <h1 className='md:text-xl'>{question}</h1>
                    <button className={isActive ? 'bg-red-600 text-white py-2 px-4 rounded cursor-pointer hover:bg-red-700 ' : 'bg-blue-400 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-700'} onClick={() => handleClick(id)}>{isActive ? 'Hide' : 'Show'}</button>
                </div>
                <p className='text-left mb-5'>{isActive && answer}</p>
            </li>
        </>
    )
}

export default FaqList
