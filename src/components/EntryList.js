import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import React from "react";
import PropTypes from "prop-types";
import UserJournal from "./UserJournal";

function EntryList(props){
  useFirestoreConnect([{ 
    collection: 'entry' 
  }]);
  const entries = useSelector(state => state.firestore.ordered.entry);
  if (isLoaded(entries)) {
    return (
      <React.Fragment>
        <hr/>
        {entries.map((entry) => {
          return <UserJournal
            onSelectEntry = { props.onSelectEntry }
            date={entry.date}
            dream={entry.dream}
            reflection={entry.reflection}
            id={entry.id}
            key={entry.id}/>
        })}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}

EntryList.propTypes = {
  onSelectEntry: PropTypes.func
};

export default EntryList;