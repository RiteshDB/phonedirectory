import React, { Component } from "react";
import AddSubscribers from "./AddSubscribers";
import ShowSubscribers from "./ShowSubscribers";
import { BrowserRouter as Route, Router } from "react-route-dom";

class PhoneDirectory extends Component {
    constructor() {
        super();
        this.state = {
            subscribersList: []
        }
    }

    addSubscribersHandler = (newSubscriber) => {
        alert("add subscriber handler called");
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

    render() {
        return (
            <Router>
                <div>
                    <Route exact='/' render={(props) => <ShowSubscribers {...props} ShowSubscribers={this.state.subscribersList} />} />
                    <Route exact='/Add' render={(props) => <AddSubscribers {...props} addSubscribersHandler={this.addSubscribersHandler} />} />
                </div>
            </Router>
        )
    }
}

export default PhoneDirectory;