const regexVars = new RegExp("[a-z]", "ig")
const aloneVar = /[\s\+\-\*\(][a-z]/ig;
const regexIsolatedSide = /[\+\-]?\s*\d+[\s\=\+\-\)]/ig;
const regexNumSide = /[\+\-]\s*\d*\s*[a-z]/ig;
let sides, sideOneLenght, sideTwoLenght, newNumberSide, newIsolatedSide, exchangeArray, usedVar, numbersSide

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

const resolveNumSide = (expectedResult, varSide) => {
    if(Number.isInteger(expectedResult)){
        return expectedResult
    }else{
        return `<div class="results-fraction"><p>${sides[numbersSide]}</p><hr /><p>${sides[varSide]}</p></div>`
    }
}

const wholeVarIsolation = (varSide, c) => {
    let fraction = `${sides[numbersSide]} / ${sides[varSide]}`
    let expectedResult = eval(fraction)

    sides[numbersSide] = resolveNumSide(expectedResult, varSide)
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

const executeVarSide = (newSide, oppSide, realSide, regex) => {
    newSide = newSide.replaceAll(",", "")
    sides[oppSide] = newSide
    sides[realSide] = sides[realSide].replaceAll(regex, "")
    usedVar = sides[realSide].match(regexVars)
    usedVar = usedVar[0]
}

const executeNumSide = (oppSide, newSide, realSide, regex, c) => {
    sides[oppSide] = replaceAloneVars(newSide)
    replacingSide(realSide, regex)
    replacingSide(oppSide, usedVar)
    wholeVarIsolation(oppSide, c)
}

const execute = (realSide, regex, newSide, oppSide, c) => {
    arreangingEquationSides(realSide, regex)
    newSide = `${sides[oppSide]} ${exchangeArray}`

    if(regex == regexIsolatedSide){
        executeVarSide(newSide, oppSide, realSide, regex)
    }else{
        executeNumSide(oppSide, newSide, realSide, regex, c)
    }
}

const execution = (side, c) => {
    execute(side, regexIsolatedSide, newNumberSide, numbersSide)
    execute(numbersSide, regexNumSide, newIsolatedSide, side, c)
}

const isolatingVar = (side, c) => {
    (side === 0) ? numbersSide = 1: null
    execution(side, c)
}

const getRandom = () => {
    if(sideOneLenght.length > sideTwoLenght.length){
        return 0
    }else if (sideTwoLenght.length > sideOneLenght.length){
        return 1
    }else{
        return Math.floor(Math.random() * 2)
    }
}

const getOneSide = (index) => {
    return [...sides[index].matchAll(regexVars)]
}

const getBothSides = (equation) => {
    sides = equation.split("=")
    sideOneLenght = getOneSide(0)
    sideTwoLenght = getOneSide(1)
}

const solveEquation = (equation, c) => {
    getBothSides(equation)
    isolatingVar(getRandom(), c)
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