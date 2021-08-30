import React from "react"
import Results from "../components/Results"
import Loader from "../components/Loader"

import chosenPage from "../utils/chosenPage"
import interpreter from "../utils/interpreter"
import doMath from "../utils/doMath"

const regExp = new RegExp("\=")

class Equations extends React.Component {
    constructor(props){
        super(props)
        this.state = { enabled: false, equation: "", loading: null, error: null }

        this.handlerChange = this.handlerChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.interpretation = document.querySelector(".equations__interpretation")
        this.doMathBtn = document.querySelector(".equations button")
        chosenPage("Equations")
    }

    handleClick = () => {
        this.setState({
            loading: true
        })

        this.result = doMath(this.state.equation, this)
    }

    handlerChange = e => {
        let result, content = e.target.value

        if(content.match(regExp)){ 
            result = true 
        }else{ 
            result = false 
        }

        this.setState({ enabled: result, equation: content })
        this.interpretation.innerHTML = interpreter(content)
    }

    renderBtn = () => {
        if(this.state.enabled){
            return( <button className="abled" onClick={this.handleClick}>Do the math</button> )
        }else{
            return( <button className="nonAbled" disabled>Do the math</button> )
        }
    }

    renderResults = () => {
        if(this.state.loading === null){
            return( <div></div> )
        }else if(this.state.loading){
            return( <Loader />)
        }else{
            return( <Results />)
        }
    }

    render(){
        return(
            <section className="equations">
                <h2>Write a linear equation</h2>
                <input type="text" placeholder="E.g: 2x + 10 = 23x + 120" onChange={this.handlerChange}/>
                <div className="equations__interpretation">.</div>
                {this.renderBtn()}
                {this.renderResults()}
            </section>
        )
    }
}

export default Equations