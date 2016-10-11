import React, { Component } from "react";
import MainLeft from "components/app/main-left.jsx!";
import MainCenter from "components/app/main-center.jsx!";
import MainRight from "components/app/main-right.jsx!";
class Body extends Component {
    constructor (props, context) {
        super(props, context);
    }
    render () {
        return (
            <div id="wrapper" >
                <MainLeft />
                <MainCenter />
                <MainRight />
            </div>);
    }
}

export default Body;