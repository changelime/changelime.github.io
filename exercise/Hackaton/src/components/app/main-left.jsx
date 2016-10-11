import React, { Component } from "react";
class MainLeft extends Component {
    constructor (props, context) {
        super(props, context);
    }
    render () {
        return (
            <div id="main-left" >
                <nav>
                    <ul>
                        <li>
                            <a href="http://www.positioningsystems.com">Positioning Systems</a>
                        </li>
                        <li>
                            <a href="http://strategicdiscipline.positioningsystems.com/newsletter">Newsletter</a>
                        </li>
                    </ul>
                </nav>
            </div>);
    }
}

export default MainLeft;