import React from "react";
import { useNavigate } from "react-router-dom"
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
    const navigate = useNavigate();


  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-meetups-842de-default-rtdb.firebaseio.com/meetups.json",
      {
          method: "POST",
          body: JSON.stringify(meetupData),
          headers:{
              "Content-Type": "application/json"
          }
      }
    ).then(() =>{
        navigate("/", {replace: true});
    });
  }

  return (
    <div>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  );
};

export default NewMeetupPage;
