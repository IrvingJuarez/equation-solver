const regexVars = new RegExp("[a-z]", "ig")
const regexIsolatedSide = /[\+\-]\s*\d+[\s\=\+\-]/ig;
const regexNumSide = /[\+\-]\s*\d+\s*[a-z]/ig;
let sides, sideOneLenght, sideTwoLenght, newNumberSide, newIsolatedSide
let numbersSide = 0

const execNumbersSide = (varSide) => {
    newIsolatedSide = `${sides[varSide]} ${[...sides[numbersSide].matchAll(regexNumSide)]}`
    sides[varSide] = newIsolatedSide

    sides[numbersSide] = sides[numbersSide].replaceAll(regexNumSide, "")

    console.log(sides[varSide])
    console.log(sides[numbersSide])
}

const execIsolatedSide = (varSide) => {
    newNumberSide = `${sides[numbersSide]} ${[...sides[varSide].matchAll(regexIsolatedSide)]}`
    newNumberSide = newNumberSide.replaceAll(",", "")
    sides[numbersSide] = newNumberSide
    // console.log(sides[numbersSide])

    sides[varSide] = sides[varSide].replaceAll(regexIsolatedSide, "")
    // console.log(sides[varSide])
}

const isolatingVar = (result) => {
    if(result === 0){
        numbersSide = 1
    }

    execIsolatedSide(result)
    execNumbersSide(result)
}

const resolveWhichSide = (equation) => {
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
    resolveWhichSide(equationWithSigns)
    component.setState({ loading: false })
}

export default doMath