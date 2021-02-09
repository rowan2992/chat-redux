const messagesReducer = (state, action) => {
  if (state === undefined) {
    return [];
  }
  switch (action.type) {
    case 'FETCH_MESSAGES':
      return action.payload;
    case 'CREATE_MESSAGE':
      const messages = state; 
      let newMessage = action.payload;
      messages.push(newMessage);
      return messages;
    default:
      return state;
  }
}

export default messagesReducer;
