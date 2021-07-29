import router from "./routes"
import styles from "./styles/main.css"
import interpreter from "./utils/interpreter"

window.addEventListener("load", async () => {
    await router()
    await interpreter()
})
window.addEventListener("hashchange", router)