const regexDigits = /\d/ig
let sideOne, sideTwo, sideOneVar, sideTwoVar, flag

const numComprobation = (varSide) => {
    let varSideNum
    varSideNum = varSide.match(regexDigits) || []
    if(varSideNum.length >= 1){
        flag = false
    }else{
        flag = [varSide, (varSide == sideOne) ? sideTwo: sideOne]
    }
}

const settingSides = (equation) => {
    sideOne = equation[0]
    sideTwo = equation[1]
}

const gettingVars = (regex) => {
    sideOneVar = sideOne.match(regex) || []
    sideTwoVar = sideTwo.match(regex) || []
}

const evalLengthVars = () => {
    if(sideOneVar.length === 1 && sideTwoVar.length === 0){
        numComprobation(sideOne)
    }else if(sideTwoVar.length === 1 && sideOneVar.length === 0){
        numComprobation(sideTwo)
    }else{
        flag = false
    }
}

const isEquationSolved = (equation, regexVars) => {
    flag = false
    equation = equation.split("=")
    settingSides(equation)
    gettingVars(regexVars)
    evalLengthVars()

    return flag
}

export default isEquationSolved