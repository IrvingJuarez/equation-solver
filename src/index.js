import router from "./routes"
import styles from "./styles/main.css"
import displaySidebar from "./utils/displaySidebar"
import hideSidebar from "./utils/hideSidebar"

window.addEventListener("load", async () => {
    await router()
    const barButton = document.querySelector(".hamburgerButton")
    const closeButton = document.querySelector(".closeButton")

    barButton.addEventListener("click", displaySidebar)
    closeButton.addEventListener("click", hideSidebar)
})
window.addEventListener("hashchange", router)