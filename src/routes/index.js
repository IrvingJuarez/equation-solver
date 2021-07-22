import Header from "../templates/Header"
import Equations from "../pages/Equations"
import About from "../pages/About"
import Error404 from "../pages/Error404"
import getHash from "../utils/getHash"

const routes = {
    "/": Equations,
    "/about": About
}

const onNavigate = (hash, render) => {
    window.history.pushState(
        {},
        hash,
        window.location.origin + hash
    )

    render.innerHTML = routes[hash] ? routes[hash] : Error404
}

const router = async () => {
    const header = null || document.getElementById("mainHeader")
    const content = null || document.getElementById("content")

    header.innerHTML = await Header()
    let hash = getHash()
    let render
    if(routes[hash]){
        render = routes[hash]
    }else{
        render = Error404
    }
    content.innerHTML = await render()
}

export default router;