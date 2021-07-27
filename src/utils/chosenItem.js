const chosenItem = (hash) => {
    let item
    const removeClass = document.querySelector(".itemChosen")
    removeClass.classList.remove("itemChosen")

    switch(hash){
        case "/":
            item = ".itemEquations"
        break;
        case "/about":
            item = ".itemAbout"
        break;
        case "/contact":
            item = ".itemContact"
        break;
    }

    const newClass = document.querySelector(item)
    newClass.classList.add("itemChosen")
}

export default chosenItem