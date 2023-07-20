import React, { useState } from "react";
import Header from "./Header";
import "./common/common.css"
import "./AddSubscribers.css";
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@mui/material";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

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

    const navigate = useNavigate()

    function changeHandler(event) {
        let temp = state;
        temp[event.target.name] = event.target.value;
        setState({ id: 0, name: temp.name, phone: temp.phone });
    }

    function addNewSubscriber(event) {
        event.preventDefault();
        props.AddSubscribersHandler(state);
        setState({
            id: 0,
            name: "",
            phone: ""
        });
        navigate("/");
    }


    return (
        <div className="component-body-container">
            <Header heading="Add Subscriber" />
            <br></br>
            <div>
                <Link to="/"><Button variant="outlined">Back</Button></Link>
            </div>
            <div>
                <ValidatorForm className="subscriber-form" onSubmit={addNewSubscriber}>
                    <div>
                        <TextValidator 
                        id="Name" 
                        label="Enter Name" 
                        variant="standard"
                        type="text"
                        name="name"
                        value = {Name.value} 
                        onChange={changeHandler}
                        validators={["required"]}
                        errorMessages={["Name Cannot be Empty"]}
                        
                        ></TextValidator> <br /> <br />

                        <TextValidator id="phone" label="Phone" variant="standard" name="phone" onChange={changeHandler} />
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
                        <Button variant="contained" color="success" type="Submit" size="large"> 
                            Add
                        </Button>
                    </div>
                </ValidatorForm>
            </div>
        </div>
    )
}

export default AddSubscribers;