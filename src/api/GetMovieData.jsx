import axios from "axios";

const getMovieData = async({params}) => {
    const id = params.movieId
    try {
       const res = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=1c12799f`)
        
       return res.data
    } catch (error) {
        console.log('this is an catching error',error);
    }
}

export default getMovieData
