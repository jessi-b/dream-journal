import React from "react";
import PropTypes from "prop-types";

function EntryForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.submitFormHandler}>
        <input
          type='date'
          name='date'
          placeholder='Date' />
        <textarea
          name='dream'
          placeholder='Dream' />
        <textarea
          name='reflection'
          placeholder='Reflection' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

EntryForm.propTypes = {
  submitFormHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default EntryForm;