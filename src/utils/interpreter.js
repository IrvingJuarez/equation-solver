let arr = []
let i = 0

const div = (num1, num2) => {
    return `
    <div class="divition">
        ${num1}
        <hr>
        ${num2}
    </div>
    `
}

const getMatch = (string) => {
    let regExp = /\d{1,}\w?\/\d+/g;

    if(arr.length >= 1){
        string = string.substring(arr[0].length - (73 * i))
    }
    
    let result
    let myMatch = string.match(regExp)

    if(myMatch){
        let numbers, subresult
        i++
        if(arr.length >= 1){
            numbers = myMatch[0].split("/")
            subresult = string.replace(regExp, div(...numbers))
            result = `${arr[0]}${subresult}`
            arr[0] = result
        }else{
            numbers = myMatch[0].split("/")
            result = string.replace(regExp, div(...numbers))
            arr[0] = result
        }
    }else{
        if(arr.length >= 1){
            result = `${arr[0]}${string}`
        }else{
            result = string
        }
    }

    return result
}

const interpreter = () => {
    let input = document.querySelector("input")
    let interpretation = document.querySelector(".interpretation")

    input.addEventListener("input", (evt) => {
        if(input.value == ""){
            arr = []
        }
        interpretation.innerHTML = getMatch(input.value)
    })
}

export default interpreter