const regexDigits = /\d/ig
let sideOne, sideTwo, sideOneVar, sideTwoVar

const numComprobation = (varSide) => {
    let varSideNum
    varSideNum = varSide.match(regexDigits) || []
    if(varSideNum.length >= 1){
        return false
    }else{
        return [varSide, (varSide == sideOne) ? sideTwo: sideOne]
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
        return false
    }
}

const isEquationSolved = (equation, regexVars) => {
    equation = equation.split("=")
    settingSides(equation)
    gettingVars(regexVars)
    evalLengthVars()
}

export default isEquationSolved