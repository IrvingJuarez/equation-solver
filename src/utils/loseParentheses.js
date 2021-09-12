import { regexParentheses, sides } from "./doMath"

const regexVariables = /\s*\s?[a-z]/
const regexNonvariables = /[\+\-]\s*\d+/
let result

const solveRegex = (regExp, str) => {
    return [...str.match(regExp)]
}

const pullApart = (betweenParentheses) => {
    let variables = solveRegex(regexVariables, betweenParentheses)
    let nonVariables = solveRegex(regexNonvariables, betweenParentheses)

    console.log(variables)
    console.log(nonVariables)
}

const solveSide = (side) => {
    let splitter = sides[side].split("(")
    let multiplier = splitter[0]
    let multiplied = splitter[1]

    pullApart(multiplied)
}

const loseParentheses = (side) => {
    if(regexParentheses.test(sides[side])){
        solveSide(side)
    }

    return sides[side]
}

export default loseParentheses