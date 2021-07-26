import styles from "../styles/error404.css"

const Error404 = () => {
    const view = `
        <section class="error404Container">
            <h2>Error 404</h2>
            <p>Page not found</p>
            <img src="./assets/images/dinosaur.png">
        </section>
    `;

    return view;
}

export default Error404;