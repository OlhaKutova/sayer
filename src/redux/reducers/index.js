import {
   ADD_ITEM,
   DELETE_ITEM,
   ADD_COMMENT,
   DELETE_COMMENT, SET_INITIAL_STATE
} from '../actionTypes/index';
import {saveItems, sortItems} from '../../helpers';

const initialState = {
   items: []
};

export default (state = initialState, action) => {
   switch (action.type) {
      case SET_INITIAL_STATE:
         return {
            ...state,
            items: action.payload
         };
      case ADD_ITEM:
         const newItems = [...state.items, action.payload];
         const sortedNewItems = newItems.sort(sortItems);
         saveItems(sortedNewItems).catch();

         return {
            ...state,
            items: sortedNewItems
         };
      case ADD_COMMENT:
         const itemIndex = state.items
            .findIndex(item => item.id === action.itemId);
         const itemComments = state.items[itemIndex].comments || [];
         const comments = [action.payload, ...itemComments];
         state.items[itemIndex].comments = comments;
         saveItems(state.items).catch();

         return {
            ...state,
            items: [...state.items]
         };
      case DELETE_ITEM:
         const filteredItems = state.items
            .filter(item => item.id !== action.payload);
         saveItems(filteredItems).catch();

         return {
            ...state,
            items: filteredItems
         };
      case DELETE_COMMENT:
         const itemIndex2 = state.items
            .findIndex(item => item.id === action.payload.itemId);
         const newComments = state.items[itemIndex2].comments
            .filter(comment => comment.id !== action.payload.commentId);
         state.items[itemIndex2].comments = newComments;
         saveItems(state.items).catch();

         return {
            ...state,
            items: [...state.items]
         };
      default:
         return state;
   }
}
