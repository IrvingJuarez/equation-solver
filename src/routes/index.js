import Header from "../templates/Header"
import Equations from "../pages/Equations"
import About from "../pages/About"
import Error404 from "../pages/Error404"
import getHash from "../utils/getHash"

const routes = {
    "/": Equations,
    "/about": About
}

const router = async () => {
    const header = null || document.getElementById("mainHeader")
    const content = null || document.getElementById("content")

    header.innerHTML = await Header()

    let hash = getHash()
    let render = routes[hash] ? routes[hash] : Error404;
    content.innerHTML = await render()
}

export default router;