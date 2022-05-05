import React from "react";
import PropTypes from "prop-types";
import EntryForm from "./EntryForm";
import { useFirestore } from 'react-redux-firebase'

function CreateEntry(props){
  const firestore = useFirestore();
  function addEntryToFirestore(event) {
    event.preventDefault();
    props.onCreateEntry();
    return firestore.collection('entry').add({
      date: event.target.date.value,
      dream: event.target.dream.value, 
      reflection: event.target.reflection.value,
      timeOpen: firestore.FieldValue.serverTimestamp()
    });
  }

  return (
    <React.Fragment>
      <EntryForm 
        submitFormHandler={addEntryToFirestore}
        buttonText="Submit" />
    </React.Fragment>
  );
}

CreateEntry.propTypes = {
  onCreateEntry: PropTypes.func
};

export default CreateEntry;