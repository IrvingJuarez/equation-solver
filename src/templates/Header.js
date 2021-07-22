const Header = () => {
    const view = `
        <img class="logo" src="./assets/images/logo.svg" alt="Pi logo">
        <nav>
            <ul>
                <li><a href="/">Equations</a></li>
                <li><a href="#/about/">About</a></li>
            </ul>
            <section class="arrowContainer">
                <div class="headerArrow"></div>
            </section>
        </nav>
    `

    return view;
}

export default Header;