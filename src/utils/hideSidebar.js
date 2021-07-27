const hideSidebar = () => {
    const hamburgerButton = document.querySelector(".hamburgerButton")
    const sidebar = document.querySelector(".sidebar")
    hamburgerButton.style.opacity = "1"
    sidebar.style.right = "-100%"
}

export default hideSidebar