import { sides, regexVars } from "./doMath"

const regexSlashes = /[\+\-]\s*\d+\s*[a-z]?\s*\/\s*\d+[a-z]?/;

const solveMatch = (match) => {
    let flag2 = regexVars.test( match )

    if( flag2 ){
        return "match non-solved"
    }else{
        return eval( String(match) );
    }
}

const gettingRidOfSlashes = (side) => {
    let flag = regexSlashes.test(sides[side])

    if(flag){
        let matches = [...sides[side].match(regexSlashes)]
        for(let i of matches){
            i = solveMatch(i)
            console.log(i)
        }
    }

    return sides[side]
}

export default gettingRidOfSlashes;