const doMath = (equation, component) => {
    setTimeout(() => {
        component.setState({
            loading: false
        })
    }, 3000)
}

export default doMath