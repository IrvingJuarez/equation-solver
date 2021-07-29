const div = `<div>
    numberOne
    <hr>
    numberTwo
</div>`

const getMatch = (string) => {
    let regExp = /\d{1,}\/\d{1,}/g;
    let matches = [...string.matchAll(regExp)]
    let result = string.replace(regExp, div)

    return result
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