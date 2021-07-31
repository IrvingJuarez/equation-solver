const tryAgain = () => {
    let input = document.querySelector("input")
    let interpretation = document.querySelector(".interpretation")
    let button = document.querySelector(".tryAgainButton")
    let result = document.querySelector(".result")

    result.textContent = ""
    input.value = ""
    interpretation.innerHTML = "."

    button.style.opacity = "0.5"
    button.style.borderColor = "transparent"
    button.style.cursor = "initial"
}

export default tryAgain