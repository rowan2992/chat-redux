import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { createMessage } from '../actions';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createMessage(this.props.selectedChannel, this.props.currentUser, this.state.value);
    this.setState({ value: '' });
  }


  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit} className="channel-editor">
          <input
            type="text"
            value={this.state.value}
            className="form-control"
            onChange={this.handleChange}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createMessage }, dispatch);
}

function mapReduxStateToProps(reduxState) {
  return {
    currentUser: reduxState.currentUser,
    selectedChannel: reduxState.selectedChannel
  };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(MessageForm);
