import { CHANNEL_SELECTED } from '../actions';

const selectedChannelReducer = (state, action) => {
  if (state === undefined) {
    return null;
  }
  switch (action.type) {
    case CHANNEL_SELECTED: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export default selectedChannelReducer;

