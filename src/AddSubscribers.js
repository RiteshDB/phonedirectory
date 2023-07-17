import React, { Component } from "react";
import Header from "./Header";
import "./common/common.css"
import "./AddSubscribers.css";
import {Link} from 'react-router-dom';

class AddSubscribers extends Component {

    constructor() {
        super();
        this.state = {
            id: 0,
            name: "",
            phone: ""
        }
    }
    changeHandler = (event) =>{
        let temp = this.state;
        temp[event.target.name] = event.target.value;
        this.setState(temp);
    }
    
    addNewSubscriber = (event)=> {
        event.preventDefault();
        this.props.AddSubscribersHandler(this.state);        
    }

    render() {
        return (
            <div className="component-body-container">
                <Header heading="Add Subscriber" />
                <br></br>
                <div>
                    <Link to="./"><button className="custom-btn">Back</button></Link>
                </div>
                <div>
                    <form className="subscriber-form">
                        <div>
                            <label className="label-control" htmlFor="name">Name:</label>
                            <input type="text" className="input-control" id="name" name="name" onChange={this.changeHandler.bind(this)}></input><br></br><br></br>
                            <label className="label-control" htmlFor="phone">Phone:</label>
                            <input type="text" className="input-control" id="phone" name="phone" onChange={this.changeHandler.bind(this)}></input>
                        </div>
                        <br></br>
                        <div className="subscriber-info-container">
                            <div className="subscriber-to-add-heading">
                                <span>Subscriber to be added:</span>
                            </div>
                            <div className="subscriber-info">
                                <label className="label-control">Name: {this.state.name}</label><br></br>
                                <label className="label-control">Phone: {this.state.phone}</label>
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="custom-btn add-btn" onClick={this.addNewSubscriber.bind(this)}>Add</button>
                        </div>
                    </form>
                </div>
            </div>

        )
    }
}

export default AddSubscribers;