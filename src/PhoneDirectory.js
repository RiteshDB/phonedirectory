import React, { Fragment, useState, useEffect } from "react";
import AddSubscribers from "./AddSubscribers";
import ShowSubscribers from "./ShowSubscribers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import { SubscriberCountContext } from "./SubscriberCountContext";


function PhoneDirectory() {

    const [subscribersList, setSubscribersList] = useState([]);

    useEffect(loadData, []);

    function loadData() {
        fetch("http://localhost:7081/contacts")
        .then(response => response.json())
        .then(data => setSubscribersList(data));

    }

    async function addSubscribersHandler(newSubscriber) {

        const response = await fetch("http://localhost:7081/contacts", {method:"POST", headers: {'Content-Type': "application/json"}, body: JSON.stringify(newSubscriber) });
        const data = await response.json();
        loadData();
        
    }

    function deleteSubscriberHandler(subscriberId) {
        // let tempSubscriberList = subscribersList.filter((subscriber) => subscriber.id !== subscriberId);
        // setSubscribersList(tempSubscriberList);
        let url = "http://localhost:7081/contacts/"+subscriberId;
        fetch(url, {method:"DELETE"})
        .then(response =>response.json())
        .then(data => loadData());
    }

    return (
        <Fragment>
            <Router>
                <Routes>
                    <Route exact path='/' Component={(props) => <ShowSubscribers {...props} ShowSubscribers={subscribersList} deleteSubscriberHandler={(subscriberId) => deleteSubscriberHandler(subscriberId)} />} />
                    <Route exact path='/Add' Component={(props) => <AddSubscribers {...props} AddSubscribersHandler={(newSubscriber) => addSubscribersHandler(newSubscriber)} />} />
                </Routes>
            </Router>
            <SubscriberCountContext.Provider value={subscribersList.length}>
                <Footer></Footer>
            </SubscriberCountContext.Provider>
        </Fragment>
    )

}

export default PhoneDirectory;