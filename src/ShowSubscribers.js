import React, { Component } from "react";
import Header from "./Header";
import "./common/common.css";
import "./ShowSubscribers.css";
import { Link } from "react-router-dom";

function ShowSubscribers(props){

  const deleteHandler = (id)=>{
    props.deleteSubscriberHandler(id);
  } 

    return (
      <div>
        <Header heading="Phone Directory"/>
        <div className="component-body-container">
          <Link to="/Add"><button className="custom-btn add-btn">Add</button></Link>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
          {
            props.ShowSubscribers.map(item => {
              const { id, name, phone } = item
              return < div className="grid-container" key={id}>
                <span className="grid-item">{name}</span>
                <span className="grid-item">{phone}</span>
                <span className="grid-item action-btn-container">
                  <button className="custom-btn delete-btn" onClick={deleteHandler({id})}>Delete</button>
                </span>
              </div>
            })
          }


        </div>
      </div >
    );
 
}

export default ShowSubscribers;
