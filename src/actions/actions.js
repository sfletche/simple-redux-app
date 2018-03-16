import { SET_TITLE, CLEAR_TITLE } from '../constants/action-types';

const setTitle = (title) => ({
  type: SET_TITLE,
  title,
});

const clearTitle = () => ({
  type: CLEAR_TITLE,
});

export {
  setTitle,
  clearTitle,
};
