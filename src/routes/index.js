import Header from "../templates/Header"
import Equations from "../pages/Equations"
import About from "../pages/About"
import Error404 from "../pages/Error404"

const routes = {
    "/": Equations,
    "/equations": Equations,
    "/about": About
}

const router = async () => {
    const header = null || document.getElementById("mainHeader")
    const content = null || document.getElementById("content")

    header.innerHTML = await Header()
}

export default router;