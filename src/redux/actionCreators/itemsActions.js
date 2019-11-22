import {ADD_ITEM, DELETE_ITEM, ADD_COMMENT, DELETE_COMMENT, SET_INITIAL_STATE} from '../actionTypes/index';
import uuidv4 from 'uuid/v4'

export const setInitialState = (items) => {
   return {
      type: SET_INITIAL_STATE,
      payload: items
   }
};

export const addItem = (text) => {
   return {
      type: ADD_ITEM,
      payload: {
         id: uuidv4(),
         date: Date.now(),
         text
      }
   }
};

export const addComment = (commentText, itemId) => {
   return {
      type: ADD_COMMENT,
      payload: {
         id: uuidv4(),
         date: Date.now(),
         commentText
      },
      itemId: itemId
   }
};

export const deleteItem = (id) => {
      return {
         type: DELETE_ITEM,
         payload: id
      }
};

export const deleteComment = (itemId, commentId) => {
   return {
      type: DELETE_COMMENT,
      payload: {
        itemId, commentId
      }
   }
};
