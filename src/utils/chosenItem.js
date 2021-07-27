const chosenItem = (hash) => {
    let item
    const removeClass = document.querySelector(".itemChosen")
    const sidebar = document.querySelector(".sidebar")
    const hamburgerButton = document.querySelector(".hamburgerButton")
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
    sidebar.style.right = "-100%"
    hamburgerButton.style.opacity = "1"
}

export default chosenItem