import { sides } from "./doMath"

const regexSlashes = /[\+\-]\s*\d+\s*[a-z]?\s*\/\s*\d+[a-z]?/;

const gettingRidOfSlashes = (side) => {
    let flag = regexSlashes.test(sides[side])

    if(flag){
        console.log("There is a match")
    }

    return sides[side]
}

export default gettingRidOfSlashes;