import { regexParentheses, sides } from "./doMath"

const regexVariables = /\s*\s?[a-z]/
const regexNonvariables = /[\+\-]\s*\d+/
let result, variables, nonVariables, flag

const solveRegex = (regExp, str) => {
    return [...str.match(regExp)]
}

const pullApart = (betweenParentheses) => {
    variables = solveRegex(regexVariables, betweenParentheses)
    nonVariables = solveRegex(regexNonvariables, betweenParentheses)

    console.log(variables)
    console.log(nonVariables)
}

const concatenation = (multiplier, array, marker) => {
    array = array.map(item => {
        if(marker){
            result = `${result}${multiplier}${item}`
        }else{
            flag = `${multiplier} * ${item}`
            result = `${result} ${eval(flag)}`
        }
    })
}

const obtainResult = (multiplier) => {
    concatenation(multiplier, variables, true)
    concatenation(multiplier, nonVariables, false)

    console.log(result)
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
    }

    return sides[side]
}

export default loseParentheses