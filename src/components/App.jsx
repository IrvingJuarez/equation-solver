import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Layout from "./Layout"
import Equations from "../pages/Equations"
import GraphicCalculator from "../pages/GraphicCalculator"
import About from "../pages/About"
import Contact from "../pages/Contact"

import "../styles/components/App.scss"

class App extends React.Component {
    constructor(props){
        super(props)
    }

    render(){

        return(
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Equations} />
                        <Route exact path="/graphic-calculator" component={GraphicCalculator} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contact" component={Contact} />
                    </Switch>
                </Layout>
            </BrowserRouter>
        )
    }

}

export default App