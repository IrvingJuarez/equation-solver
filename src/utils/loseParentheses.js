import { regexParentheses, sides } from "./doMath"

const regexVariables = /\s*\s?[a-z]/
const regexNonvariables = /[\+\-]\s*\d+/
let result, variables, nonVariables, multiplication

const solveRegex = (regExp, str) => {
    return [...str.match(regExp)]
}

const pullApart = (betweenParentheses) => {
    variables = solveRegex(regexVariables, betweenParentheses)
    nonVariables = solveRegex(regexNonvariables, betweenParentheses)
}

const concatenation = (multiplier, array, marker) => {
    array = array.map(item => {
        if(marker){
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

const obtainResult = (multiplier) => {
    concatenation(multiplier, variables, true)
    concatenation(multiplier, nonVariables, false)
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