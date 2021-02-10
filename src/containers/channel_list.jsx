import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectChannel, fetchMessages } from '../actions';

class ChannelList extends Component {

  handleClick = (channel) => {
    this.props.selectChannel(channel);
    this.props.fetchMessages(channel);
  }

  render() {
    return (
      <div className="channels-container">
        <span>Rowan's Redux Chat</span>
        <ul>
          {this.props.channels.map((channel) => {
            return (
              <li
                key={channel}
                className={channel === this.props.selectedChannel ? "active" : null}
                
                onClick={() => this.handleClick(channel)}
              >
                #{channel}
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectChannel, fetchMessages }, dispatch);
}

function mapReduxStateToProps(reduxState) {
  return {
    channels: reduxState.channels,
    selectedChannel: reduxState.selectedChannel
  }
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(ChannelList);
