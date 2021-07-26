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
                            <li><a href="#"><img></a></li>
                            <li><a href="#"><img></a></li>
                            <li><a href="#"><img></a></li>
                        </ul>
                    </nav>
                </div>
            </section>
            <section class="pinnedRepositories">
                <h2>Pinned repositories on GitHub</h2>
                <article class="repository"></article>
                <article class="repository"></article>
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