const div = () => {
    return `
    <div class="divition">
        num1
        <hr>
        num2
    </div>
    `
}

const getMatch = (string) => {
    let regExp = /\d{1,}\w?\/\d{1,}/g;
    return string.replace(regExp, div)
}

const interpreter = () => {
    let input = document.querySelector("input")
    let interpretation = document.querySelector(".interpretation")

    input.addEventListener("input", () => {
        let str = input.value
        interpretation.innerHTML = getMatch(str)
    })
}

export default interpreter