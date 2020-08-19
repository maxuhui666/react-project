import {ADD_TODO_ITEM, DELETE_TODO_ITEM} from './todoListActionTypes';

export const getAddItemAction = (value) => {
  return {
    type: ADD_TODO_ITEM,
    value
  }
}
export const getDeleteItemAction = (index) => {
  return {
    type: DELETE_TODO_ITEM,
    index
  }
}
