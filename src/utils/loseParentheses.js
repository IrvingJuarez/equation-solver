import { regexParentheses, sides, regexVars } from "./doMath"

const regexVariables = /(\d+[A-z]{1,1}|\s*\s?[a-z])/ig;
const regexMultiVars = /\d+[A-z]{1,1}/;
const regexNonvariables = /[\+\-]?\s*\d+/;
const regexAvoidBlankSpaces = /\d+\s+[a-z]/ig;
let result, variables, nonVariables, multiplication

const solveRegex = (regExp, str) => {
    return [...str.match(regExp)]
}

const pullApart = (betweenParentheses) => {
    variables = solveRegex(regexVariables, betweenParentheses)
    nonVariables = solveRegex(regexNonvariables, betweenParentheses)

    // console.log(variables)
    // console.log(nonVariables)
}

const resolveMultiVars = (item, multiplier) => {
    let usedVar = item.match(regexVars)
    item = item.replace(regexVars, "")
    result = result + "+ " + eval(`${multiplier} * ${item}`) + `${usedVar}`;
}

const concatenation = (multiplier, array, marker) => {
    array = array.map(item => {
        if(marker && regexMultiVars.test(item)){
            resolveMultiVars(item, multiplier)
        }else if(marker){
            result = `${result}${multiplier}${item}`
        }else{
            multiplication = eval(`${multiplier} * ${item}`)
            if(!/[\-\+]/.test(multiplication)){
                multiplication = `+ ${multiplication}`
            }

            result = `${result} ${multiplication}`
        }
    })
}

const replaceBlanks = () => {
    let matches = [...result.match(regexAvoidBlankSpaces)]
    
    matches.map(match => {
        result = result.replace(match, () => {
            return match.replace(" ", "")
        })
    })
}

const avoidBlanks = () => {
    if(regexAvoidBlankSpaces.test(result)){
        replaceBlanks()
    }
}

const obtainResult = (multiplier) => {
    concatenation(multiplier, variables, true)
    concatenation(multiplier, nonVariables, false)

    avoidBlanks()
}

const solveSide = (side) => {
    let splitter = sides[side].split("(")
    let multiplier = splitter[0]
    let multiplied = splitter[1]

    pullApart(multiplied)
    obtainResult(multiplier)
}

const loseParentheses = (side) => {
    if(regexParentheses.test(sides[side])){
        result = ""
        solveSide(side)
        return result
    }

    return sides[side]
}

export default loseParentheses