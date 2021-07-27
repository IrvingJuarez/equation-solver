const displaySidebar = () => {
    const bar = document.querySelector(".sidebar")
    const barButton = document.querySelector(".hamburgerButton")

    barButton.style.opacity = "0"
    bar.style.right = "0px"
}

export default displaySidebar