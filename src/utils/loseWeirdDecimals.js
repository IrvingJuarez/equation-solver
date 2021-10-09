import { sides } from "./doMath"

const regexWeridD = /[\+\-]\s*\d+\s*\d+\/\d+/i;
const slashesOff = /[\+\-]?\d+\s*\/[\+\-]?\s*\d+/i;

const getNormalDecimals = (str) => {
    let slash = [...str.match(slashesOff)]
    let normalDecimal = eval(String( slash[0] ))
    str = str.replace(slash[0], `+ ${normalDecimal}`)
    return eval( String(str) )
}

const loseWeirdDecimals = (side) => {
    let flag = regexWeridD.test( sides[side] )

    if(flag){
        let match = [...sides[side].match(regexWeridD)]
        let rp = getNormalDecimals(match[0])
        sides[side] = `+ ${sides[side].replace(match[0], rp)}`
        console.log( sides[side] )
    }

    // return sides[side]
}

export default loseWeirdDecimals;