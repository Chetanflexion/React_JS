import React, { Component } from "react";
import { Student } from './Student';
import { NewComp } from './NemComp';

export class Home extends Component {

    render() {
        return(
            <div>
                <h3>This is the Home page.</h3>
                <br />
                <h4>This is Nesting component.</h4>
                <Student />
                <br />
                <h4>This is setstate/constructor</h4>
                <NewComp />
            </div>
        )
    }
}