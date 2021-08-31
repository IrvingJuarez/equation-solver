const signRegexp = /[^\+\-\*\(\)\[\]\d\s\=a-zA-Z]/g
const letterRegex = new RegExp("[a-z]", "ig");
let signMatches, letterMatches

const resolveErrors = (equation, component, signMatches) => {
    if(signMatches.length == 0){
        letterMatches = [...equation.matchAll(letterRegex)]
        if(letterMatches.length == 1){
            component.setState({
                loading: false
            })
        }else{
            component.setState({
                error: new Error("You are using more than one variables"),
                loading: false
            })
        }
    }else{
        component.setState({
            error: new Error("You are using an invalid sign"),
            loading: false
        })
    }
}

const doMath = (equation, component) => {
    equation = equation.toLowerCase()
    signMatches = [...equation.matchAll(signRegexp)]

    resolveErrors(equation, component, signMatches)
}

export default doMath