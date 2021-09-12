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

const obtainResult = (multiplier) => {
    variables = variables.map(variable => {
        result = `${result}${multiplier}${variable}`
    })

    nonVariables = nonVariables.map(nonVar => {
        flag = `${multiplier} * ${nonVar}`
        result = `${result} ${eval(flag)}`
    })

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