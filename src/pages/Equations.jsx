import React from "react"
import chosenPage from "../utils/chosenPage"
import interpreter from "../utils/interpreter"

const regExp = new RegExp("\=")

class Equations extends React.Component {
    constructor(props){
        super(props)
        this.state = { enabled: false }

        this.handlerChange = this.handlerChange.bind(this);
    }

    componentDidMount(){
        this.interpretation = document.querySelector(".equations__interpretation")
        this.doMathBtn = document.querySelector(".equations button")
        chosenPage("Equations")
    }

    handlerChange = e => {
        let content = e.target.value

        if(content.match(regExp)){
            this.setState({
                enabled: true
            })
        }
        this.interpretation.innerHTML = interpreter(content)
    }

    renderBtn = () => {
        if(this.state.enabled){
            return(
                <button className="abled">Do the math</button>
            )
        }else{
            return(
                <button className="nonAbled" disabled>Do the math</button>
            )
        }

    }

    render(){
        return(
            <section className="equations">
                <h2>Write a linear equation</h2>
                <input type="text" placeholder="E.g: 2x + 10 = 23x + 120" onChange={this.handlerChange}/>
                <div className="equations__interpretation">.</div>
                {this.renderBtn()}
            </section>
        )
    }
}

export default Equations