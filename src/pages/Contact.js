import styles from "../styles/contact.css"
import getData from "../utils/getData"

const Contact = async() => {
    const pinnedRepos = ["Pacman-Remastered", "equation-solver"]
    const reposInfo = await getData()
    const formatDate = (date) => {
        let slicedDate = new Date(date.slice(0,10))
        let time = date.slice(11, 16)
        const newDate = new Intl.DateTimeFormat("en-EN").format(slicedDate)

        return `${newDate} at ${time}`
    }
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
                ${
                    reposInfo.map(repo => {
                        if(repo.name == pinnedRepos[0] || repo.name == pinnedRepos[1]){
                            return `
                            <article class="repository">
                                <div class="titleContainer">
                                    <img src="./assets/images/bookLogo.png">
                                    <a href="${repo.html_url}">${repo.name}</a>
                                </div>
                                <p>${repo.description}</p>
                                <div class="lenguageContainer">Latest update: ${formatDate(repo.updated_at)}</div>
                            </article>`
                        }
                    }).join("")
                }
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