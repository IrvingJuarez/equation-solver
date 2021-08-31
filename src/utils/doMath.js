const signRegexp = /[^\+\-\*\(\)\[\]\d\s\=a-zA-Z]/g
const letterRegex = new RegExp("[A-z]", "g");
let signMatches, letterMatches

const doMath = (equation, component) => {
    equation = equation.toLowerCase()
    signMatches = [...equation.matchAll(signRegexp)]

    if(signMatches.length == 0){
        letterMatches = [...equation.matchAll(letterRegex)]
        if(letterMatches.length == 1){
            console.log("You are right, let's pass to the next section")
        }else{
            component.setState({
                error: new Error("You are using more than one variables")
            })
        }
    }else{
        component.setState({
            error: new Error("You are using an invalid sign")
        })
    }
}

export default doMath