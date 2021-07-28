const getData = async() => {
    const API = "https://api.github.com/users/IrvingJuarez/repos"

    try{
        const response = await fetch(API)
        const data = await response.json()
        return data
    }catch(error){
        console.log(`Fetch error`, error)
    }
}

export default getData