import React, { Component } from "react";
import bellA from './bellA.png';
import bellB from './bellB.png';

export class NewComp extends Component {
    constructor (props) {
        super (props)
        this.state = {
            message: "Subscribe to Chetan",
            sub: "Subscribe",
            imageURL: bellA,
        }; 
    }

    styles = {
        fontStyle: "italic",
        color: "purple"
    };

    Buttonchange = () => {
        this.setState({
            message: "Hit the bell icon to never miss an update",
            sub: "Subscribed",
        });
    }

    imageChange = () => {
        this.setState({
            imageURL: bellB,
            message: "Thank you! Happy learning!",
        })
    }

    render() {
        return(
            <div className="App">
                <h3 style={this.styles}>{this.state.message}</h3>
                <button onClick={this.Buttonchange}>{this.state.sub}</button>
                <br />
                <img 
                    style={{ width: "30px", height: "30px"}} 
                    src={this.state.imageURL} 
                    alt="bell" onClick={this.imageChange} />
            </div>
        )
    }
}