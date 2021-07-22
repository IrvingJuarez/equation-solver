const Header = () => {
    const view = `
        <img class="logo" src="./assets/images/logo.svg" alt="Pi logo">
        <nav>
            <ul>
                <li><a href="equations/">Equations</a></li>
                <li><a href="about/">About</a></li>
            </ul>
        </nav>
        <div class="header-arrow"></div>
    `

    return view;
}

export default Header;