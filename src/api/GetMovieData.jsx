
const getMovieData = async({params}) => {
    const id = params.movieId
    try {
       const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=1c12799f`)
       const data = await res.json()
        
       return data
    } catch (error) {
        console.log('this is an catching error',error);
    }
}

export default getMovieData
