import { regexParentheses, sides } from "./doMath"

const loseParentheses = (side) => {
    if(regexParentheses.test(sides[side])){
        console.log([...sides[side].match(regexParentheses)])
    }

    return sides[side]
}

export default loseParentheses