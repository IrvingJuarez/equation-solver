import styles from "../styles/equations.css"

const Equations = () => {
    const view = `
        <section class="equationsContainer">
            <h2>Write a linear equation</h2>
            <input type="text" placeholder="Eg. 2x + 10 = 23x + 120"></input>
            <div class="interpretation">.</div>
            <div class=" button doMathButton">Do the math</div>
            <div class=" button tryAgainButton">Try again</div>
            <span id="result" class="result"></span>
            <section class="process aftermath">
                <h3 id="process">See process</h3>
                <article class="processContent"></article>
            </section>
            <section class="comprobation aftermath">
                <h3 id="comprobation">See comprobation</h3>
                <article class="comprobationContent"></article>
            </section>
        </section>
    `

    return view
}

export default Equations