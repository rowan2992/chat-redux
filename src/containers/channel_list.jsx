import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Message from '../components/message';
import MessageForm from './message_form';
import { fetchMessages } from '../actions';

class MessageList extends Component {

  componentWillMount() {
    this.fetchMessages;
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchMessages, 5000);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }


  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  }
  
  render() {
    return (
      <div className="channel-container">
        <div className="channel-content" ref={(list) => { this.list = list; }}>
          {
            this.props.messages.map((message) => {
              return <Message key={message.created_at} message={message} />
            })
          }
        </div>
        <MessageForm />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages: fetchMessages },
    dispatch
  );
}


function mapReduxStateToProps(reduxState) {
  return {
    channels: reduxState.channels
  }
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(MessageList);
