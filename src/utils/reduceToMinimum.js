let zeroComprobation, returnNum1, returnNum2, dividers = [10, 7, 5, 3, 2]

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

const isThereAZero = (num1, num2) => {
    switch(eval(num1 / num2)){
        case 0:
            return `Zero divided by something is zero`
        break;
        case Infinity:
            return `undefined`
        break;
        default:
            return false
        break;
    }
}

const reduceToMinimum = (num1, num2) => {
    zeroComprobation = isThereAZero(num1, num2)

    if(zeroComprobation != false){
        return zeroComprobation
    }else{
        returnNum1 = num1
        returnNum2 = num2
        reduceLoop()
        return `<div class="results-fraction"><p>${returnNum1}</p><hr /><p>${returnNum2}</p></div>`
    }
}

export default reduceToMinimum