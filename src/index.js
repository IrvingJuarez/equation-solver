import router from "./routes"
import styles from "./styles/main.css"

window.addEventListener("load", async () => {
    await router()
})
window.addEventListener("hashchange", router)