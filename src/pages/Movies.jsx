import { useLoaderData } from "react-router"
import Card from "../components/UI/Card";

const Movies = () => {
  const data  = useLoaderData()
  
  
  return (
    <div className="m-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">

        {data &&
          data.Search.map((movie) => <Card key={movie.imdbID} movie={movie} /> )
        }

    </div>
  )
}

export default Movies