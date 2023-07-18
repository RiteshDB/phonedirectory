import React, { Component } from "react";
import Header from "./Header";
import "./common/common.css";
import "./ShowSubscribers.css";
import { Link } from "react-router-dom";

class ShowSubscribers extends Component {

  deleteHandler(id){
    console.log(id);
    this.props.deleteSubscriberHandler(id);
  } 

  render() {
    // let contactList = [
    //   {
    //     id: 1,
    //     name: "Ritesh",
    //     phoneNo: 98768372827
    //   },
    //   {
    //     id: 2,
    //     name: "Dattatraya",
    //     phoneNo: 9736276282
    //   }
    // ]
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
            this.props.ShowSubscribers.map(item => {
              const { id, name, phone } = item
              return < div className="grid-container" key={id}>
                <span className="grid-item">{name}</span>
                <span className="grid-item">{phone}</span>
                <span className="grid-item action-btn-container">
                  <button className="custom-btn delete-btn" onClick={this.deleteHandler.bind(this, id)}>Delete</button>
                </span>
              </div>
            })
          }


        </div>
      </div >
    );
  }
}

export default ShowSubscribers;
