import React from "react"
import chosenPage from "../utils/chosenPage"

class Equations extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        chosenPage("Equations")
    }

    render(){

        return(
            <section className="equations">
                <h2>Write a linear equation</h2>
                <input type="text" placeholder="E.g: 2x + 10 = 23x + 120" />
                <p>.</p>
                <button>Do the math</button>
            </section>
        )
    }
}

export default Equations