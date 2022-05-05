import React from "react";
import PropTypes from "prop-types";

function EntryDetail(props){
  const { entry, onClickingDelete } = props;
  
  return (
    <React.Fragment>
      <h3>{entry.date}</h3>
      <p>{entry.dream}</p>
      <p>{entry.reflection}</p>
      <button onClick={ props.onClickingEdit }>Update Entry</button>
      <button onClick={()=> onClickingDelete(entry.id) }>Delete</button>
      <hr/>
    </React.Fragment>
  );
}

EntryDetail.propTypes = {
  entry: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default EntryDetail;