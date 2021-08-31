const doMath = (equation, component) => {
    console.log(equation)
    component.setState({ loading: false })
}

export default doMath