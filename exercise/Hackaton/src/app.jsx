import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "components/app/app.jsx!";

export default function(){
    ReactDOM.render(
        <App />,
        document.querySelector("#react-root")
    );
};