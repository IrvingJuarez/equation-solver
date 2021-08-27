import React from "react"
import chosenPage from "../utils/chosenPage"

class Contact extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        chosenPage("Contact")
    }

    render(){
        return(
            <h2>I am contact</h2>
        )
    }
}

export default Contact