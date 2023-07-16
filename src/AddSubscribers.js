import React, { Component } from "react";
import Header from "./Header";
import "./common/common.css"
import "./AddSubscribers.css";

class AddSubscribers extends Component {

    constructor() {
        super();
        this.state = {
            id: 0,
            name: "",
            phone: ""
        }
    }
    changeHandler = (event) => {
        let temp = this.state;
        temp[event.target.name] = event.target.value;
        this.setState(temp);
        console.log(this.state);
    }

    render() {
        return (
            <div className="component-body-container">
                <Header heading="Add Subscriber" />
                <br></br>
                <div>
                    <button className="custom-btn">Back</button>
                </div>
                <div>
                    <form className="subscriber-form">
                        <div>
                            <label className="label-control" htmlFor="name">Name:</label>
                            <input type="text" className="input-control" id="name" name="name" onChange={this.changeHandler}></input><br></br><br></br>
                            <label className="label-control" htmlFor="phone">Phone:</label>
                            <input type="text" className="input-control" id="phone" name="phone" onChange={this.changeHandler}></input>
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
                            <button type="submit" className="custom-btn add-btn">Add</button>
                        </div>
                    </form>
                </div>
            </div>

        )
    }
}

export default AddSubscribers;