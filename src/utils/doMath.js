const regex = new RegExp("[a-z]", "ig")
let sides, sideOneLenght, sideTwoLenght

const resolveWhichSide = (equation) => {
    sides = equation.split("=")
    sideOneLenght = [...sides[0].matchAll(regex)]
    sideTwoLenght = [...sides[1].matchAll(regex)]

    if(sideOneLenght.length > sideTwoLenght.length){
        console.log(sides[0])
    }else if (sideTwoLenght.length > sideOneLenght.length){
        console.log(sides[1])
    }else{
        console.log("Random")
    }
}

const doMath = (equation, component) => {
    resolveWhichSide(equation)
    component.setState({ loading: false })
}

export default doMath