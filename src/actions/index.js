// TODO: add and export your own actions

export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const CREATE_MESSAGE = 'CREATE_MESSAGE';
export const CHANNEL_SELECTED = 'CHANNEL_SELECTED';

export function fetchMessages(channel) {
  // TODO Simulate API
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then(response => response.json())
    .then((data) => {
      return data.messages;
    });
  
  return {
    type: FETCH_MESSAGES,
    payload: promise
  }
}

export function createMessage(channel, author, content) {

  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`
  const body = { channel: channel, author: author, content: content };
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());
  console.log(promise);
  
  return {
    type: CREATE_MESSAGE,
    payload: promise
  }
}

export function selectChannel(channel) {
  return {
    type: CHANNEL_SELECTED,
    payload: channel
  };
}

