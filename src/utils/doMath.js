const regex = new RegExp("[a-z]", "ig")
let sides, sideOneLenght, sideTwoLenght

const isolatingVar = (result) => {
    
}

const resolveWhichSide = (equation) => {
    let result
    sides = equation.split("=")
    sideOneLenght = [...sides[0].matchAll(regex)]
    sideTwoLenght = [...sides[1].matchAll(regex)]

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

const doMath = (equation, component) => {
    resolveWhichSide(equation)
    component.setState({ loading: false })
}

export default doMath