import styles from "../styles/contact.css"

const Contact = () => {
    const view = `
        <section class="contactContainer">
            <section class="info">
                <div class="avatarImage"></div>
                <div class="titles">
                    <h2>Irving Juárez</h2>
                    <h3>Fronted developer</h3>
                    <nav class="socialMedia">
                        <ul>
                            <li><a href="https://twitter.com/juarez1_irving"><img src="./assets/images/twitter.png"></a></li>
                            <li><a href="https://github.com/IrvingJuarez/"><img src="./assets/images/github.png"></a></li>
                            <li><a href="mailto: irvingjuarez274@gmail.com"><img src="./assets/images/mail.png"></a></li>
                        </ul>
                    </nav>
                </div>
            </section>
            <section class="pinnedRepositories">
                <h2>Pinned repositories on GitHub</h2>
                <article class="repository">
                    <div class="titleContainer">
                        <img src="./assets/images/bookLogo.png">
                        <h2>Title</h2>
                    </div>
                    <p>Description</p>
                    <div class="lenguageContainer"><span></span> Lenguage</div>
                </article>
                <article class="repository">
                    <div class="titleContainer">
                        <img src="./assets/images/bookLogo.png">
                        <h2>Title</h2>
                    </div>
                    <p>Description</p>
                    <div class="lenguageContainer"><span></span> Lenguage</div>
                </article>
            </section>
            <section class="activity">
                <h2>Activity in the last year</h2>
                <article class="activity"></article>
            </section>
        </section>
    `

    return view
}

export default Contact