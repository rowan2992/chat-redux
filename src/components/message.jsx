import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import {  } from '../actions';

class Message extends Component {

  render() {
    const { created_at, content, author } = this.props.message;
    const time = new Date(created_at).toLocaleTimeString();
    return (
      <div className="message-container">
        <i className="author">{author}</i>
        <p>{content}</p>
        <small>{time}</small>
      </div>
    );
  }
}


export default (Message);
