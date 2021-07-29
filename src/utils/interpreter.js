const interpreter = () => {
    let input = document.querySelector("input")
    let interpretation = document.querySelector(".interpretation")

    input.addEventListener("input", (evt) => {
        interpretation.textContent = input.value.toLowerCase()
    })
}

export default interpreter