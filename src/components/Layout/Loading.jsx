import React from 'react'

const Loading = () => {
  return (
    <div className="flex justify-center gap-4 items-center h-screen">
        <h2> Loading...  </h2>
      <span className="animate-spin inline-block w-8 h-8 border-[3px] border-current border-t-transparent text-blue-600 rounded-full"></span>
    </div>
  )
}

export default Loading
