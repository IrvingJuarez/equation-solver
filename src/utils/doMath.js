const varSide = (side1, side2) => {
    let vars1 = regex(side1) || []
    let vars2 = regex(side2) || []
    let varside

    if(vars1.length === vars2.length){
        let random = Math.floor(Math.random() * 2)
        if(random == 0){
            random = side1
        }else{
            random = side2
        }
        varside = `${random} was chosen randomly`
    }else if(vars1.length > vars2.length){
        varside = `${side1} has more variables`
    }else{
        varside = `${side2} has more variables`
    }

    console.log(varside)
}

const comparition = (arr, firstValue) => {
    for(let i = 1; i < arr.length; i++){
        if(arr[i] != firstValue){
            return false
        }
    }

    return true
}

const howManyVars = (arr, str) => {
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
        let equalities = str.split("=")
        varSide(...equalities)
        result = `${arr[0]} = something`
    }else{
        result = "Linear equations have only one variable. Try again with a linear equation"
    }

    solvingField.textContent = result
}

const regex = (str) => {
    let varRegExp = /[A-z]/g
    return str.match(varRegExp)
}

const doMath = () => {
    let input = document.querySelector("input")
    let str = input.value.toLowerCase()
    let vars = regex(str)

    howManyVars(vars, str)
}

export default doMath