import React from "react"
import chosenPage from "../utils/chosenPage"

class GraphicCalculator extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        chosenPage("Graphic calculator")
    }

    render(){
        return(
            <h2>I am Graphic Calculator page</h2>
        )
    }
}

export default GraphicCalculator