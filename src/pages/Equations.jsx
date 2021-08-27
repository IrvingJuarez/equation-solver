import React from "react"
import chosenPage from "../utils/chosenPage"
// import interpreter from "../utils/interpreter"

class Equations extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        chosenPage("Equations")
    }

    handlerChange = e => {
        let interpretation = document.querySelector(".equations__interpretation")
        let regex = /\d\/\d/g

        interpretation.innerHTML = e.target.value.replaceAll(regex, () => {
            let newString = e.target.value.split("").reverse().join("")
            let numbers = [...newString.split(/\s?\/?\s?/, 2)]
            // console.log(numbers)

            return (`
                <div>
                    <p>${numbers[1]}</p>
                    <hr />
                    <p>${numbers[0]}</p>
                </div>
            `)
        })
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