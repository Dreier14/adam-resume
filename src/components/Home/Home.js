import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Content from '../Content/Content';
import '../Global.css';


export default class Home extends Component {
    render() {
        return (
            <div> 
                <div className="background-style" style={{paddingTop:'45px'}}>
                    <Content/>
                    <br/>
                </div>
             </div>
        );
    }
}