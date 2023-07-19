import React, { useState } from "react";
import Header from "./Header";
import "./common/common.css"
import "./AddSubscribers.css";
import { Link } from 'react-router-dom';

function AddSubscribers(props) {

    // constructor() {
    //     super();
    //     this.state = {
    //         id: 0,
    //         name: "",
    //         phone: ""
    //     }
    // }

    const [state, setState] = useState({
        id: 0,
        name: "",
        phone: ""
    })

    function changeHandler(event){
        let temp = state;
        temp[event.target.name] = event.target.value;
        setState({id: 0, name: temp.name, phone: temp.phone});
    }

    function addNewSubscriber(event) {
        event.preventDefault();
        props.AddSubscribersHandler(state);
        setState({id: 0,
            name: "",
            phone: ""}) ;
    }


    return (
        <div className="component-body-container">
            <Header heading="Add Subscriber" />
            <br></br>
            <div>
                <Link to="/"><button className="custom-btn">Back</button></Link>
            </div>
            <div>
                <form className="subscriber-form" onSubmit={addNewSubscriber}>
                    <div>
                        <label className="label-control" htmlFor="name">Name:</label>
                        <input type="text" className="input-control" id="name" name="name" onChange={changeHandler}></input><br></br><br></br>
                        <label className="label-control" htmlFor="phone">Phone:</label>
                        <input type="text" className="input-control" id="phone" name="phone" onChange={changeHandler}></input>
                    </div>
                    <br></br>
                    <div className="subscriber-info-container">
                        <div className="subscriber-to-add-heading">
                            <span>Subscriber to be added:</span>
                        </div>
                        <div className="subscriber-info">
                            <label className="label-control">Name: {state.name}</label><br></br>
                            <label className="label-control">Phone: {state.phone}</label>
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

export default AddSubscribers;