const regexDigits = /\d/ig
let sideOne, sideTwo, sideOneVar, sideTwoVar

const numComprobation = () => {
    console.log("Number comprobation")
}

const isEquationSolved = (equation, regexVars) => {
    equation = equation.split("=")
    sideOne = equation[0]
    sideTwo = equation[1]

    sideOneVar = sideOne.match(regexVars)
    sideTwoVar = sideTwo.match(regexVars)

    if(!sideOneVar || !sideTwoVar){
        if(sideOneVar.length === 1 || sideTwoVar.length === 1){
            numComprobation()
        }else{
            console.log("One side has more than one variable")
        }
    }else{
        console.log("Both sides has variables")
    }
}

export default isEquationSolved