const chosenPage = (currentPage) => {
    let allPages = [...document.querySelectorAll("li")]

    allPages.map(page => {
        if(page.textContent == currentPage){
            page.classList.add("current")
        }else{
            page.classList.remove("current")
        }
    })
}

export default chosenPage