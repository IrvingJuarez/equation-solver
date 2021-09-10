const regexDigits = /\d/ig
let sideOne, sideTwo, sideOneVar, sideTwoVar

const numComprobation = (varSide) => {
    let varSideNum
    varSideNum = varSide.match(regexDigits) || []
    if(varSideNum.length >= 1){
        return false
    }else{
        let result = [varSide, (varSide == sideOne) ? sideTwo: sideOne]
        console.log(result)
    }
}

const isEquationSolved = (equation, regexVars) => {
    equation = equation.split("=")
    sideOne = equation[0]
    sideTwo = equation[1]

    sideOneVar = sideOne.match(regexVars) || []
    sideTwoVar = sideTwo.match(regexVars) || []

    if(sideOneVar.length === 1 && sideTwoVar.length === 0){
        numComprobation(sideOne)
    }else if(sideTwoVar.length === 1 && sideOneVar.length === 0){
        numComprobation(sideTwo)
    }else{
        return false
    }
}

export default isEquationSolved