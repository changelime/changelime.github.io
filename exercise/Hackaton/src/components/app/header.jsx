import React, { Component } from "react";
class Header extends Component {
    constructor (props, context) {
        super(props, context);
        this.state = {
            text: {
                quotetext: `Just wanted to let you know our first Supper Huddle was a huge success!! Your help certainly was beneficial in its success!! Thanks again for all of your help!!!.`,
                quotesig: `Tyna, Charge Team ~ JPMA`
            }
        }
    }
    render () {
        return (
            <header id="header" >
                <div className="left" >
                    <img  src="http://strategicdiscipline.positioningsystems.com/Portals/78084/site/images/logo-left2.jpg?width=393&amp;height=100&amp;name=logo-left2.jpg"  />
                </div>
                <div className="right" >
                    <p className="quotetext">{this.state.text.quotetext}</p>
                    <p className="quotesig">{this.state.text.quotesig}</p>
                </div>
            </header>);
    }
}

export default Header;