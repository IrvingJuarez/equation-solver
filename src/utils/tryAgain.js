const tryAgain = () => {
    let input = document.querySelector("input")
    let interpretation = document.querySelector(".interpretation")
    let button = document.querySelector(".tryAgainButton")
    input.value = ""
    interpretation.textContent = "."

    button.style.opacity = "0.5"
    button.style.borderColor = "transparent"
    button.style.cursor = "initial"
}

export default tryAgain