import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import {  } from '../actions';

class Message extends Component {

  render() {
    return (
      <div className="message">{}</div>
    );
  }
}

function mapReduxStateToProps(reduxState) {
  return {
    content: reduxState.content
  }
}

export default connect(mapReduxStateToProps, null)(Message);
