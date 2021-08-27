import React from "react"
import chosenPage from "../utils/chosenPage"
import interpreter from "../utils/interpreter"

class Equations extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        chosenPage("Equations")
    }

    handlerChange = e => {
        let interpretation = document.querySelector(".equations__interpretation")
        interpretation.innerHTML = interpreter(e.target.value)
    }

    render(){

        return(
            <section className="equations">
                <h2>Write a linear equation</h2>
                <input type="text" placeholder="E.g: 2x + 10 = 23x + 120" onChange={this.handlerChange}/>
                <div className="equations__interpretation">.</div>
                <button>Do the math</button>
            </section>
        )
    }
}

export default Equations