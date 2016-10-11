import React, { Component } from "react";
import Header from "components/app/header.jsx!";
import Body from "components/app/body.jsx!";
import Footer from "components/app/footer.jsx!";
class App extends Component {
    constructor (props, context) {
        super(props, context);
    }
    render () {
        return (
            <div id="react-app" >
                <Header />
                <Body />
                <Footer />
            </div>);
    }
}

export default App;