const regexVars = new RegExp("[a-z]", "ig")
const aloneVar = /[\s\+\-\*\(][a-z]/ig;
const regexIsolatedSide = /[\+\-]\s*\d+[\s\=\+\-]/ig;
const regexNumSide = /[\+\-]\s*\d*\s*[a-z]/ig;
let sides, sideOneLenght, sideTwoLenght, newNumberSide, newIsolatedSide, exchangeArray, usedVar
let numbersSide

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

const replacingSide = (sideId, replace) => {
    sides[sideId] = sides[sideId].replaceAll(replace, "")
    sides[sideId] = eval(sides[sideId])
}

const wholeVarIsolation = (varSide, c) => {
    sides[numbersSide] = `${sides[numbersSide]} / ${sides[varSide]}`
    // sides[numbersSide] = eval(sides[numbersSide])
    sides[varSide] = usedVar

    c.setState({
        equationVarSide: sides[varSide],
        equationNumSide: sides[numbersSide],
        loading: false
    })
}

const replaceAloneVars = (varSide) => {
    return varSide.replaceAll(aloneVar, e => {
        return e.replace(regexVars, "1")
    })
}

const execNumbersSide = (varSide, c) => {
    arreangingEquationSides(numbersSide, regexNumSide)
    newIsolatedSide = `${sides[varSide]} ${exchangeArray}`
    sides[varSide] = replaceAloneVars(newIsolatedSide)

    replacingSide(numbersSide, regexNumSide)
    replacingSide(varSide, usedVar)

    wholeVarIsolation(varSide, c)
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

const isolatingVar = (result, c) => {
    if(result === 0){
        numbersSide = 1
    }

    execIsolatedSide(result, c)
    execNumbersSide(result, c)
}

const solveEquation = (equation, c) => {
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

    isolatingVar(result, c)
}

const addLeftSign = (str) => {
    str = `+ ${str}`
    return str.replace("=", "= +")
}

const doMath = (equation, component) => {
    numbersSide = 0
    let equationWithSigns = addLeftSign(equation)
    solveEquation(equationWithSigns, component)
}

export default doMath