import React, { Fragment, useState } from "react";
import AddSubscribers from "./AddSubscribers";
import ShowSubscribers from "./ShowSubscribers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import { SubscriberCountContext } from "./SubscriberCountContext";


function PhoneDirectory() {

    const [subscribersList, setSubscribersList] = useState([]);


    function addSubscribersHandler(newSubscriber) {
     
        if (subscribersList.length > 0) {
            newSubscriber.id = ((subscribersList[subscribersList.length - 1].id) + 1);
        }
        else {
            newSubscriber.id = 1;
        }
        console.log(subscribersList.length);
        let tempSubscriberList = subscribersList;
        tempSubscriberList.push(newSubscriber);
        setSubscribersList(tempSubscriberList);
        console.log(subscribersList.length);
    }

    function deleteSubscriberHandler(subscriberId) {
        let tempSubscriberList = subscribersList.filter((subscriber) => subscriber.id !== subscriberId);
        setSubscribersList(tempSubscriberList);
    }

    return (
        <Fragment>
            <Router>
                <Routes>
                    <Route exact path='/' Component={(props) => <ShowSubscribers {...props} ShowSubscribers={subscribersList} deleteSubscriberHandler={(subscriberId) => deleteSubscriberHandler(subscriberId)} />} />
                    <Route exact path='/Add' Component={(props) => <AddSubscribers {...props} AddSubscribersHandler={(newSubscriber) => addSubscribersHandler(newSubscriber)} /> } />
                </Routes>
            </Router>
            <SubscriberCountContext.Provider value={subscribersList.length}>
                <Footer></Footer>
            </SubscriberCountContext.Provider>
        </Fragment>
    )

}

export default PhoneDirectory;