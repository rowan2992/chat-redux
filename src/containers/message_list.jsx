import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Message from '../components/message';
// import {  } from '../actions';

class MessageList extends Component {

  render() {
    return (
      <div className="message-list">
        <Message />
      </div>
    );
  }
}

console.log(reduxState.messages);

function mapReduxStateToProps(reduxState) {
  return {
    messages: reduxState.messages
  }
}

export default connect(mapReduxStateToProps, null)(MessageList);
