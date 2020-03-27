import { createStore } from 'redux';

const INITIAL_STATE = {
  toggleModal: false,
  toggleTheme: {mode: 'light'}
};

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'TOGGLE_MODAL':
      return {...state, toggleModal: action.status};
    case 'TOGGLE_THEME':
      return {...state, toggleTheme: action.status};
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
