import React, { Component } from "react";
class MainRight extends Component {
    constructor (props, context) {
        super(props, context);
    }
    render () {
        return (
            <div id="main-right" >
                <h1>Sign Up For Your Free Needs Assessment...</h1>
                <form ref="form" onSubmit={this.submit.bind(this)} action="/" method="POST">
                    <div className="input-group mandatory " >
                        <label htmlFor="first-name" >First Name</label>
                        <input onFocus={this.valid.bind(this)} onBlur={this.valid.bind(this)} ref="first-name" className="input" type="text" id="first-name" name="first-name" defaultValue="" />
                    </div>
                    <div className="input-group mandatory " >
                        <label htmlFor="last-name" >Last Name</label>
                        <input onFocus={this.valid.bind(this)} onBlur={this.valid.bind(this)} ref="last-name" className="input" type="text" id="last-name" name="last-name" defaultValue="" />
                    </div>
                    <div className="input-group mandatory " >
                        <label htmlFor="email" >Email (we will keep your email completely private)</label>
                        <input onFocus={this.valid.bind(this)} onBlur={this.valid.bind(this)} ref="email" className="input" type="text" id="email" name="email" defaultValue="" />
                    </div>
                    <div className="input-group " >
                        <label htmlFor="company" >Company</label>
                        <input onFocus={this.valid.bind(this)} onBlur={this.valid.bind(this)} ref="company" className="input" type="text" id="company" name="company" defaultValue="" />
                    </div>
                    <div className="input-group mandatory " >
                        <label htmlFor="phone" >Phone</label>
                        <input onFocus={this.valid.bind(this)} onBlur={this.valid.bind(this)} ref="phone" className="input" type="text" id="phone" name="phone" defaultValue="" />
                    </div>
                    <div className="input-group " >
                        <label htmlFor="employees" ># of Employees:</label>
                        <select onFocus={this.valid.bind(this)} onBlur={this.valid.bind(this)} ref="employees" className="input" id="employees" name="employees" >
                            <option value="" disabled="disabled" defaultValue={true}>- Please Select -</option>
                            <option value="0">0</option>
                            <option value="1-4">1-4</option>
                            <option value="5-9">5-9</option>
                            <option value="10-19">10-19</option>
                            <option value="20-49">20-49</option>
                            <option value="50-99">50-99</option>
                            <option value="100-249">100-249</option>
                            <option value="250 ">250 </option>
                        </select>
                    </div>
                    <div className="input-group" >
                        <label htmlFor="does" >My business does (Type of Products or Services):</label>
                        <input onFocus={this.valid.bind(this)} onBlur={this.valid.bind(this)} ref="does" className="input" type="text" id="does" name="does" defaultValue="" />
                    </div>
                    <div className="input-group" >
                        <label htmlFor="time" >Best time to get in touch with me is:</label>
                        <input onFocus={this.valid.bind(this)} onBlur={this.valid.bind(this)} ref="time" className="input" type="text" id="time" name="time" defaultValue="" />
                    </div>
                    <p>I understand that by participating I am under no obligation to buy anything and that the information I share with your consultants will be held in the strictest confidence.</p>
                    <div className="input-group" >
                        <label htmlFor="frustrations" >My Key Business Frustrations are:</label>
                        <select onFocus={this.valid.bind(this)} onBlur={this.valid.bind(this)} ref="frustrations" className="input" id="frustrations" name="frustrations" >
                            <option value="" disabled="disabled" defaultValue={true} >- Please Select -</option>
                            <option value="Not enough Profit" >Not enough Profit</option>
                            <option value="Not enough time" >{`Can't find good people`}</option>
                            <option value="Can't develop capable managers" >{`Can't develop capable managers`}</option>
                            <option value="Inadequate cash flow" >Inadequate cash flow</option>
                            <option value="Business depends too much on me">Business depends too much on me</option>
                            <option value="Not enough personal income" >Not enough personal income</option>
                            <option value="Inconsistent operational performance" >Inconsistent operational performance</option>
                            <option value="Not enough sales / customers" >Not enough sales / customers</option>
                            <option value="Need more working capital" >Need more working capital</option>
                            <option value="Growth (Strategy)" >Growth (Strategy)</option>
                            <option value="Poor Employee Performance" >Poor Employee Performance</option>
                            <option value="Communication-Alignment" >Too Many Priorities</option>
                        </select>
                    </div>
                    <div className="input-group" >
                        <input ref="submit" type="submit" defaultValue="Request Your Needs Assessment" className="" />
                    </div>
	            </form>
            </div>);
    }
    valid(){
        let form = this.refs["form"];
        for( let key in this.refs )
        {
            let el = this.refs[key];
            let pel = el.parentElement;
            let val = el.value;
            if( key !== "form" )
            {
                if( !val && pel.classList.contains("input-group") && !(pel.classList.length === 1) )
                {
                    pel.classList.add("error");
                }
                else
                {
                    pel.classList.remove("error");
                }
            }
        }
    }
    submit(event){
        event.preventDefault();
        let form = this.refs["form"];
        this.valid();
        if(document.querySelectorAll(".error").length === 0)
        {
            alert("submit");
            // form.submit();
        }
    }
}

export default MainRight;