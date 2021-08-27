import React from "react"
import chosenPage from "../utils/chosenPage"
import interpreter from "../utils/interpreter"

class Equations extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            interpretation: "."
        }
    }

    componentDidMount(){
        chosenPage("Equations")
    }

    handlerChange = e => {
        let result = interpreter(e.target.value)

        this.setState({
            interpretation: result
        })
    }

    render(){

        return(
            <section className="equations">
                <h2>Write a linear equation</h2>
                <input type="text" placeholder="E.g: 2x + 10 = 23x + 120" onChange={this.handlerChange}/>
                <p>{this.state.interpretation}</p>
                <button>Do the math</button>
            </section>
        )
    }
}

export default Equations