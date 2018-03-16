import { SET_TITLE, CLEAR_TITLE } from '../constants/action-types';

const initialState = '';

const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TITLE:
      return action.title;
    case CLEAR_TITLE:
      return '';
    default:
      return state;
  }
};

export default contentReducer;
