import React from "react"

class Results extends React.Component{
    constructor(props){
        super(props)
    }
    
    componentDidMount(){
        this.resultContent = document.querySelector(".results__var-result")
        const { varSide, numSide } = this.props
        this.resultContent.innerHTML = `${varSide} = ${numSide}`
    }

    render(){

        return(
            <section className="results">
                <h2 className="results__var-result">.</h2>

                <article className="results__module">
                    <button>See process</button>
                </article>

                <article className="results__module">
                    <button>See comprobation</button>
                </article>
            </section>
        )
    }
}

export default Results