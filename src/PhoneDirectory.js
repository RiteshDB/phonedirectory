import React, { Component } from "react";
import AddSubscribers from "./AddSubscribers";
import ShowSubscribers from "./ShowSubscribers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class PhoneDirectory extends Component {
    constructor() {
        super();
        this.state = {
            subscribersList: []
        }
    }

    addSubscribersHandler = (newSubscriber) => {
        let subscribersList = this.state.subscribersList;
        if (subscribersList.length > 0) {
            newSubscriber.id = ((subscribersList[subscribersList.length - 1].id) + 1);
        }
        else {
            newSubscriber.id = 1;
        }
        subscribersList.push(newSubscriber);
        this.setState({ subscribersList: subscribersList });
    }

    deleteSubscriberHandler = (subscriberId) => {
        let tempSubscriberList = this.state.subscribersList;
        let itemIndex = 0;
        tempSubscriberList.forEach( (item, index) => {
            if (item.id === subscriberId) {
                itemIndex = index;
            }
        });
        tempSubscriberList.splice(itemIndex, 1);
        this.setState({ subscribersList: tempSubscriberList });
    }

    render() {
        return (
            <Router>
                <div>
                    <Routes>
                        <Route exact path='/' Component={(props) => <ShowSubscribers {...props} ShowSubscribers={this.state.subscribersList} deleteSubscriberHandler={this.deleteSubscriberHandler} />} />
                        <Route exact path='/Add' Component={(props) => <AddSubscribers {...props} AddSubscribersHandler={this.addSubscribersHandler} />} />
                    </Routes>
                </div>
            </Router>
        )
    }
}

export default PhoneDirectory;