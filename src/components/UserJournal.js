import React from "react";
import PropTypes from "prop-types";

function UserJournal(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.onSelectEntry(props.id)}>
        <h3>{props.date}</h3>
        <p>{props.dream}</p>
        <p>{props.reflection}</p>
      </div>
      <hr/>
    </React.Fragment>
  );
}

UserJournal.propTypes = {
  date: PropTypes.instanceOf(Date),
  dream: PropTypes.string,
  reflection: PropTypes.string,
  id: PropTypes.string,
  onSelectEntry: PropTypes.func
};

export default UserJournal;