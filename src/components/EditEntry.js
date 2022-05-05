import React from "react";
import EntryForm from "./EntryForm";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function EditEntry(props){
  const firestore = useFirestore();
  const { entry } = props;
  function handleEditEntry(event) {
    event.preventDefault();
    props.onEditEntry();
    const propertiesToUpdate = {
      date: event.target.date.value,
      dream: event.target.dream.value,
      reflection: event.target.reflection.value
    }
    return firestore.update({collection: 'entry', doc: entry.id }, propertiesToUpdate)
  }

  return (
    <React.Fragment>
      <EntryForm 
        submitFormHandler={handleEditEntry}
        buttonText="Update Ticket" />
    </React.Fragment>
  );
}

EditEntry.propTypes = {
  onEditEntry: PropTypes.func,
  entry: PropTypes.object
};

export default EditEntry;