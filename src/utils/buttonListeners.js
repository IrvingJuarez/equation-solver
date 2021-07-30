import tryAgain from "./tryAgain"
import doMath from "./doMath"

const isFieldEmpty = (value) => {
    let button = document.querySelector(".tryAgainButton")
    let interpretationField = document.querySelector(".interpretation")
    let opacity, border, cursor
    if(value === ""){
        opacity = "0.5"
        border = "transparent"
        cursor = "initial"
        interpretationField.textContent = "."
        button.removeEventListener("click", tryAgain)
    }else{
        opacity = "1"
        border = "var(--contrastColor)"
        cursor = "pointer"
        button.addEventListener("click", tryAgain)
    }

    button.style.opacity = opacity
    button.style.borderColor = border
    button.style.cursor = cursor
}

const equation = (str) => {
    let mathButton = document.querySelector(".doMathButton")
    let regExp = /.+[\=].+/g;
    let match = str.match(regExp)
    let color, cursor

    if(match){
        color = "white"
        cursor = "pointer"
        mathButton.addEventListener("click", doMath)
    }else{
        color = "rgba(255,255,255,0.5)"
        cursor = "initial"
        mathButton.removeEventListener("click", doMath)
    }

    mathButton.style.color = color
    mathButton.style.cursor = cursor
}

const buttonListeners = () => {
    let input = document.querySelector("input")
    input.addEventListener("input", () => {
        equation(input.value)
        isFieldEmpty(input.value)
    })
}

export default buttonListeners