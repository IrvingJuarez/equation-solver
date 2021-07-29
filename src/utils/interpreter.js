const interpreter = () => {
    let input = document.querySelector("input")
    let interpretation = document.querySelector(".interpretation")
    input.addEventListener("input", () => {
        interpretation.textContent = input.value
    })
}

export default interpreter