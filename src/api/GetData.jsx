
const getData = async () => {
    try {
        const res = await fetch(
            `https://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_SOME_KEY}&s=titanic&page=1`
        )
        const data = await res.json()
        console.log(import.meta.env.VITE_SOME_KEY);

        return data
    } catch (error) {
        console.log('this is an catching error', error);
    }
}

export default getData
