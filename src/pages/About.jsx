import React from "react"
import chosenPage from "../utils/chosenPage"

class About extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        chosenPage("About")
    }

    render(){
        return(
            <h2>I am about page</h2>
        )
    }
}

export default About