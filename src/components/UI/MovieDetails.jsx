import React from 'react'
import { useLoaderData } from 'react-router'


const MovieDetails = () => {
  const movie = useLoaderData()
  return (
    <div className="w-full px-3 ">
      <div className="m-10 mx-auto max-w-screen-lg overflow-hidden rounded-xl bg-gray-50  shadow-lg md:pl-8">
        <div className="flex flex-col overflow-hidden sm:flex-row ">

          <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">

            <h2 className="text-2xl font-bold text-gray-900 md:text-4xl lg:text-6xl">{movie.Title}</h2>
            <p className="mt-2 text-lg"><b>Released: </b>{movie.Year}</p>
            <p className="mt-2 text-lg"><b>Cast: </b>{movie.Actors}</p>
            <p className="mt-2 text-lg"><b>Type: </b>{movie.Genre}</p>
            <p className="mt-2 text-lg"><b>Cast: </b>{movie.Actors}</p>
            <p className="mt-4 mb-8 max-w-md text-gray-500"><b className='text-black'>Description: </b>{movie.Plot}</p>

            <a href="" className="group mt-auto flex w-44 cursor-pointer select-none items-center justify-center rounded-md bg-gradient-to-r from-emerald-300 to-blue-500 px-6 py-2 text-white transition">
              <span className="group flex w-full items-center justify-center rounded py-1 text-center font-bold"> Stream now </span>
            </a>

          </div>

          <div className="order-first ml-auto w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
            <img className="h-full w-full object-cover" src={movie.Poster} loading="lazy" />
          </div>
        </div>
      </div>
    </div>


  )
}

export default MovieDetails
