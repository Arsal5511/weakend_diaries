import axios from "axios";

const getData = async () => {
    try {


        // using fetch method 

        // const res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_SOME_KEY}&s=titanic&page=1`)


        // using axios method

        const res = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_SOME_KEY}&s=titanic&page=1`)

        return res.data
    } catch (error) {
        console.log('this is an catching error', error);
    }
}

export default getData
