import React from 'react'
import { NavLink } from 'react-router'
import { TERipple } from 'tw-elements-react'

const Card = ({ movie }) => {
    return (
        <div
            className="block rounded-lg bg-white max-w-fit mx-auto shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <TERipple>
                <div
                    className="relative  overflow-hidden bg-cover bg-no-repeat">
                    <img
                        className="rounded-t-lg"
                        src={movie.Poster}
                        alt={movie.Title} />
                    <a href="#!">
                        <div
                            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </a>
                </div>
            </TERipple>
            <div className="p-6">
                <h5
                    className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {movie.Title}
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    {movie.Year}
                </p>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    {movie.Type}
                </p>
                <NavLink to={`/movies/${movie.imdbID}`} >
                    <TERipple>
                        <button className="bg-gradient-to-r from-emerald-300 to-blue-500 px-6 py-3 text-white outline-none ring-blue-300 transition-all focus:ring hover:font-bold hover:opacity-90">See Details</button>
                    </TERipple>
                </NavLink>
            </div>
        </div>

    )
}

export default Card
