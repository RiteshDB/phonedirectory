import React, {  useState } from "react";
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


    function addSubscribersHandler(newSubscriber){
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

    function deleteSubscriberHandler(subscriberId){
        let tempSubscriberList = subscribersList.filter((subscriber) => subscriber.id !== subscriberId);
        setSubscribersList(tempSubscriberList);
    }

        return (
            <Router>
                <div>
                    <Routes>
                        
                        <Route exact path='/' Component={(props) => <ShowSubscribers {...props} ShowSubscribers={subscribersList} deleteSubscriberHandler={(subscriberId)=>deleteSubscriberHandler(subscriberId)} />} />
                        <Route exact path='/Add' Component={(props) => <AddSubscribers {...props} AddSubscribersHandler={(newSubscriber)=> addSubscribersHandler(newSubscriber)} />} />
                    </Routes>
                </div>
            </Router>
        )
    
}

export default PhoneDirectory;