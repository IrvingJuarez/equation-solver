import router from "./routes"
import styles from "./styles/main.css"
import interpreter from "./utils/interpreter"
import buttonListeners from "./utils/buttonListeners"
let arr = []

window.addEventListener("load", async () => {
    await router()
    await interpreter()
    await buttonListeners()
})
window.addEventListener("hashchange", router)