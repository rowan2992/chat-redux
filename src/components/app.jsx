import React from 'react';
import MessageList from '../containers/message_list'
import ChannelList from '../containers/channel_list'

const App = () => {
  return (
    <div className="messaging-wrapper">
      <div className="logo-container">
        <img className="messaging-logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Emojione_1F680.svg" alt="logo" />
      </div>
      <ChannelList />
      <MessageList />
    </div>
  );
};

export default App;
