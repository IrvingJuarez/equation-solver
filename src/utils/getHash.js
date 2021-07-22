const getHash = () => {
    let hash = location.pathname;

    if(hash == "/"){
        return "/"
    }else{
        return hash
    }
}
export default getHash;