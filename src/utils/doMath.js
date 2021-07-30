const comparition = (arr, firstValue) => {
    for(let i = 1; i < arr.length; i++){
        if(arr[i] != firstValue){
            return false
        }
    }

    return true
}

const howManyVars = (arr) => {
    let result, flag
    let solvingField = document.querySelector(".result")

    if(arr.length > 1){
        flag = comparition(arr, arr[0])
        if(flag){
            result = 1
        }else{
            result = 0
        }
    }else{
        result = 1
    }

    if(result){
        result = "Go ahead"
    }else{
        result = "The equation has two or more variables. Try again or type a linear equation."
    }

    solvingField.textContent = result
}

const doMath = () => {
    let input = document.querySelector("input")
    let str = input.value
    let varRegexp = /[A-z]/g
    let vars = str.match(varRegexp)

    howManyVars(vars)
}

export default doMath