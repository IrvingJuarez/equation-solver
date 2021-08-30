import React from "react"
import loaderGif from "../assets/gifs/loader.gif"

const Loader = () => (
    <div className="loader">
        <img src={loaderGif} alt="Loading..." />
    </div>
)

export default Loader