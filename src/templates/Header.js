const Header = () => {
    const view = `
        <img class="logo" src="./assets/images/logo.svg" alt="Pi logo">
        <nav class="headerNav">
            <ul>
                <li><a href="/">Equations</a></li>
                <li><a href="#/about/">About</a></li>
                <li id="last"><a href="#/contact/">Contact</a></li>
            </ul>
            <section class="arrowContainer">
                <div class="headerArrow"></div>
            </section>
        </nav>
        <div class="hamburgerButton">
            <img src="./assets/images/hamburgerButton.svg" alt="Hamburger button">
        </div>
    `

    return view;
}

export default Header;