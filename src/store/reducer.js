import {DELETE_TODO_ITEM, ADD_TODO_ITEM} from './todoListActionTypes';

const defaultState = {
  list: []
};
export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  if (action.type === ADD_TODO_ITEM) {
    newState.list.push(action.value);
    return newState;
  }
  if (action.type === DELETE_TODO_ITEM) {
    newState.list.splice(action.index, 1);
    return newState
  }
  return state;
}
