const Equations = () => {
    const view = `
        <h2>Write a linear equation</h2>
        <input type="text" placeholder="Eg. 2x + 10 = 23x + 120"></input>
        <p>.</p>
        <button type="button">Do the math</button>
        <span id="result"></span>
        <section class="process aftermath">
            <h3 id="process">See process</h3>
            <article class="processContent"></article>
        </section>
        <section class="comprobation aftermath">
            <h3 id="comprobation">See comprobation</h3>
            <article class="comprobationContent"></article>
        </section>
    `

    return view
}

export default Equations