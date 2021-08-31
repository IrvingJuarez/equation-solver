const signRegexp = /[^\/\+\-\*\(\)\[\]\d\s\=a-zA-Z]/g
const letterRegex = new RegExp("[a-z]", "ig");
let signMatches, match, letterMatches = []

const gettingIndividualVars = (equation) => {
    while ((match = letterRegex.exec(equation)) !== null) {
        if(!letterMatches.includes(match[0])){
            letterMatches.push(match[0])
        }
    }
}

const resolveErrors = (equation, component, signMatches) => {
    if(signMatches.length == 0){
        gettingIndividualVars(equation)
        if(letterMatches.length == 1){
            console.log("Continue, you got it")
            component.setState({ loading: false })
        }else{
            component.setState({ error: new Error("You are using more than one variable or any variable at all"), loading: false })
        }
    }else{
        component.setState({ error: new Error("You are using an invalid sign"), loading: false })
    }
}

const doMath = (equation, component) => {
    equation = equation.toLowerCase()
    signMatches = [...equation.matchAll(signRegexp)]

    resolveErrors(equation, component, signMatches)
}

export default doMath