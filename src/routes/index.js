import Header from "../templates/Header"
import Equations from "../pages/Equations"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Error404 from "../pages/Error404"
import getHash from "../utils/getHash"
import moveArrow from "../utils/moveArrow"
import displaySidebar from "../utils/displaySidebar"
import hideSidebar from "../utils/hideSidebar"
import chosenItem from "../utils/chosenItem"

const routes = {
    "/": Equations,
    "/about": About,
    "/contact": Contact
}

const router = async () => {
    const header = null || document.getElementById("mainHeader")
    const content = null || document.getElementById("content")

    header.innerHTML = await Header()
    let hash = getHash()
    moveArrow(hash)
    chosenItem(hash)
    let render
    if(routes[hash]){
        render = routes[hash]
    }else{
        render = Error404
    }
    content.innerHTML = await render()

    const barButton = document.querySelector(".hamburgerButton")
    const closeButton = document.querySelector(".closeButton")

    barButton.addEventListener("click", displaySidebar)
    closeButton.addEventListener("click", hideSidebar)
}

export default router;