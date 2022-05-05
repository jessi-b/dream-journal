import React from 'react';
import CreateEntry from './CreateEntry';
import EntryList from './EntryList';
import EntryDetail from './EntryDetail';
import EditEntry from './EditEntry';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';
import { withFirestore, isLoaded } from 'react-redux-firebase';

class JournalControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedEntry: null,
      updating: false
    };
  }

  handleClick = () => {
    if (this.state.selectedEntry != null) {
      this.setState({
        selectedEntry: null,
        updating: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }
  handleAddEntryToList = () => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }
  handleChangingSelectedEntry = (id) => {
    this.props.firestore.get({collection: 'entry', doc: id}).then((entry) => {
      const firestoreEntry = {
        date: entry.get("date"),
        dream: entry.get("dream"),
        reflection: entry.get("reflection"),
        id: entry.id
      }
      this.setState({selectedEntry: firestoreEntry });
    });
  }
  handleEditClick = () => {
    this.setState({updating: true});
  }
  handleUpdateEntryInList = () => {
    this.setState({
      updating: false,
      selectedEntry: null
    });
  }
  handleDeletingEntry = (id) => {
    this.props.firestore.delete({collection: 'entry', doc: id});
    this.setState({selectedEntry: null});
  }

  render(){
    const auth = this.props.firebase.auth();
    if (!isLoaded(auth)) {
      return (
        <React.Fragment>
          <h1>Loading...</h1>
        </React.Fragment>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser == null)) {
      return (
        <React.Fragment>
          <h1>You must be signed in to access the queue.</h1>
        </React.Fragment>
      )
    } 
    if ((isLoaded(auth)) && (auth.currentUser != null)) {
      let currentlyVisibleState = null;
      let buttonText = null;
      if (this.state.updating ) {      
        currentlyVisibleState = <EditEntry entry = {this.state.selectedEntry} onEditTicket = {this.handleUpdateEntryInList} />
        buttonText = "Return to Journal";
      } else if (this.state.selectedEntry != null) {
        currentlyVisibleState = 
        <EntryDetail 
          entry = {this.state.selectedEntry} 
          onClickingDelete = {this.handleDeletingEntry} 
          onClickingEdit = {this.handleEditClick} />
        buttonText = "Return to Journal";
      } else if (this.props.displayForm) {
        currentlyVisibleState = <CreateEntry onCreateEntry={this.handleAddEntryToList}  />;
        buttonText = "Return to Journal";
      } else {
        currentlyVisibleState = <EntryList onSelectEntry={this.handleChangingSelectedEntry} />;
        buttonText = "Add Dream";
      }
      return (
        <React.Fragment>
          {currentlyVisibleState}
          <button onClick={this.handleClick}>{buttonText}</button>
        </React.Fragment>
      );
    }
  }
}

JournalControl.propTypes = {
  displayForm: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    displayForm: state.displayForm
  }
}

JournalControl = connect(mapStateToProps)(JournalControl);

export default withFirestore(JournalControl);