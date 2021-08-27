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
    let regExp = /[\-]?[\d{1,}]?[\w]?[\+\-\*]?[\d{1,1}]?[\-\+\*]?[\d{1,}]?[\(]?\d*[\(\)]?[\d{1,}]?[\(\)]?\w?[\+\-\*]?\d*\s?\/\s?\d?[\-\.]?\d+[\s\+\-\*]{1,1}/g;

    if(string.length <= 1){
        arr = []
        i = 0
    }

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

const interpreter = (string) => {
    // let input = document.querySelector("input")
    // let interpretation = document.querySelector(".interpretation")

    // input.addEventListener("input", (evt) => {
    //     interpretation.innerHTML = getMatch(input.value)
    // })

    let regex = /\d\/\d/g;
    let numbers
    if(string.match(regex)){
        let newString = string.split("").reverse().join("")
        numbers = [...newString.split(/\s?\/?\s?/, 2)]
        console.log(numbers)
    }

    return string.replaceAll(regex, "match")
}

export default interpreter