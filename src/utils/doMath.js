const regexVars = new RegExp("[a-z]", "ig")
const regexIsolatedSide = /[\+\-]\s*\d+[\s\=\+\-]/ig;
const regexNumSide = /[\+\-]\s*\d*\s*[a-z]/ig;
let sides, sideOneLenght, sideTwoLenght, newNumberSide, newIsolatedSide, exchangeArray, usedVar
let numbersSide = 0

const arreangingEquationSides = (side, regexSide) => {
    exchangeArray = [...sides[side].matchAll(regexSide)]
    exchangeArray.map(item => {
        if(/\+/.test(item[0])){
            item[0] = item[0].replace("+", "-")
        }else if(/\-/.test(item[0])){
            item[0] = item[0].replace("-", "+")
        }
    })
}

const execNumbersSide = (varSide) => {
    arreangingEquationSides(numbersSide, regexNumSide)
    newIsolatedSide = `${sides[varSide]} ${exchangeArray}`
    sides[varSide] = newIsolatedSide

    sides[numbersSide] = sides[numbersSide].replaceAll(regexNumSide, "")
    sides[numbersSide] = eval(sides[numbersSide])

    sides[varSide] = sides[varSide].replaceAll(usedVar, "")
    sides[varSide] = eval(sides[varSide])

    console.log(`${sides[varSide]}${usedVar}`)
    console.log(sides[numbersSide])
}

const execIsolatedSide = (varSide) => {
    arreangingEquationSides(varSide, regexIsolatedSide)
    newNumberSide = `${sides[numbersSide]} ${exchangeArray}`
    newNumberSide = newNumberSide.replaceAll(",", "")
    sides[numbersSide] = newNumberSide
    // console.log(sides[numbersSide])

    sides[varSide] = sides[varSide].replaceAll(regexIsolatedSide, "")
    usedVar = sides[varSide].match(regexVars)
    usedVar = usedVar[0]
}

const isolatingVar = (result) => {
    if(result === 0){
        numbersSide = 1
    }

    execIsolatedSide(result)
    execNumbersSide(result)
}

const solveEquation = (equation) => {
    let result
    sides = equation.split("=")
    sideOneLenght = [...sides[0].matchAll(regexVars)]
    sideTwoLenght = [...sides[1].matchAll(regexVars)]

    if(sideOneLenght.length > sideTwoLenght.length){
        result = 0
    }else if (sideTwoLenght.length > sideOneLenght.length){
        result = 1
    }else{
        if(Math.floor(Math.random() * 2) == 1){
            result = 0
        }else{
            result = 1
        }
    }

    isolatingVar(result)
}

const addLeftSign = (str) => {
    str = `+ ${str}`
    return str.replace("=", "= +")
}

const doMath = (equation, component) => {
    let equationWithSigns = addLeftSign(equation)
    solveEquation(equationWithSigns)
    component.setState({ loading: false })
}

export default doMath