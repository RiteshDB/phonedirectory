import React, { Component } from "react";
import AddSubscribers from "./AddSubscribers";

class PhoneDirectory extends Component{
    constructor(){
        super();
        this.state = {
            subscribersList : []
        }
    }

    addSubscribersHandler=(newSubscriber)=>{
        alert("add subscriber handler called");
        let subscribersList = this.state.subscribersList;
        if(subscribersList.length> 0){
            newSubscriber.id = ((subscribersList[subscribersList.length-1].id)+1);
        }
        else{
            newSubscriber.id = 1;
        }
        subscribersList.push(newSubscriber);
        this.setState({subscribersList: subscribersList});
    }

    render(){
        return(
            <AddSubscribers AddSubscribersHandler={this.addSubscribersHandler}/>
        )
    }
}

export default PhoneDirectory;