import React from "react"

const Results = ({ varSide, numSide }) => (
    <section className="results">
        <h2 className="results__var-result">{varSide} = {numSide}</h2>

        <article className="results__module">
            <button>See process</button>
        </article>

        <article className="results__module">
            <button>See comprobation</button>
        </article>
    </section>
)

export default Results