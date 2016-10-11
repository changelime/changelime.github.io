import React, { Component } from "react";
class Footer extends Component {
    constructor (props, context) {
        super(props, context);
    }
    render () {
        return (
            <footer id="footer" >
                <div className="links" >
                    <a href="http://www.positioningsystems.com">Positioning Systems</a> 
                    <a href="http://strategicdiscipline.positioningsystems.com/newsletter/">Newsletter</a>
                </div>
                <p className="copyright">© 2014 Positioning Systems</p>
            </footer>);
    }
}

export default Footer;