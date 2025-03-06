import { NavLink, useNavigate, useRouteError } from 'react-router'

const ErrorPage = () => {
    const error = useRouteError()
    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate(-1)
    }
    
    const btnStyle = 'bg-red-500 my-5 hover:bg-white hover:text-red-500 border border-red-500 text-white font-bold py-2 px-4 rounded'
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <h1>{error.status}: {error.statusText}  </h1>
      <p></p>
      <p> {error.data}</p>
      <NavLink to={'/'} className={btnStyle} >Go to Home Page</NavLink>

      <button className={btnStyle} onClick={handleGoBack}>Go Back</button>
    </div>
  )
}

export default ErrorPage
