import React, { Component, useState } from "react";
import AddSubscribers from "./AddSubscribers";
import ShowSubscribers from "./ShowSubscribers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function PhoneDirectory(){
    // constructor() {
    //     super();
    //     this.state = {
    //         subscribersList: []
    //     }
    // }

    const [subscribersList, setSubscribersList] = useState([]);

    const addSubscribersHandler = (newSubscriber) => {
        let tempSubscribersList = subscribersList;
        if (tempSubscribersList.length > 0) {
            newSubscriber.id = ((tempSubscribersList[tempSubscribersList.length - 1].id) + 1);
        }
        else {
            newSubscriber.id = 1;
        }
        tempSubscribersList.push(newSubscriber);
        setSubscribersList(tempSubscribersList);
    }

    const deleteSubscriberHandler = (subscriberId) => {
        console.log("entered delete subscriber.")
        let tempSubscriberList = subscribersList;
        let itemIndex = 0;
        tempSubscriberList.forEach( (item, index) => {
            if (item.id === subscriberId) {
                itemIndex = index;
            }
        });
        tempSubscriberList.splice(itemIndex, 1);
        console.log(tempSubscriberList);
        setSubscribersList(tempSubscriberList);
    }

        return (
            <Router>
                <div>
                    <Routes>
                        <Route exact path='/' Component={(props) => <ShowSubscribers {...props} ShowSubscribers={subscribersList} deleteSubscriberHandler={deleteSubscriberHandler} />} />
                        <Route exact path='/Add' Component={(props) => <AddSubscribers {...props} AddSubscribersHandler={addSubscribersHandler} />} />
                    </Routes>
                </div>
            </Router>
        )
    
}

export default PhoneDirectory;