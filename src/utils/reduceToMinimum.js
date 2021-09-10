let returnNum1, returnNum2, dividers = [10, 7, 5, 3, 2]

const divisibleBy = (num) => {
    if(returnNum1 % num === 0 && returnNum2 % num === 0){
        return true
    }else{
        return false
    }
}

const divideBy = (num) => {
    returnNum1 /= num
    returnNum2 /= num
}

const reduce = () => {
    for(let value of dividers){
        if(divisibleBy(value)){
            divideBy(value)
            return true
        }
    }

    return false
}

const reduceLoop = () => {
    if(reduce()){
        reduceLoop()
    }
}

const reduceToMinimum = (num1, num2) => {
    returnNum1 = num1
    returnNum2 = num2

    reduceLoop()
    return `<div class="results-fraction"><p>${returnNum1}</p><hr /><p>${returnNum2}</p></div>`
}

export default reduceToMinimum