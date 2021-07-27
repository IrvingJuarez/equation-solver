const moveArrow = (hash) => {
    const arrow = document.querySelector(".arrowContainer")
    const width = arrow.offsetWidth
    let distance
    switch(hash){
        case "/":
            distance = "0px"
        break;
        case "/about":
            distance = `calc(50% - 13%)`
        break;
        case "/contact":
            distance = `calc(100% - ${width}px)`
        break;
        default:
            distance = "0px"
        break;
    }

    arrow.style.left = distance
}

export default moveArrow