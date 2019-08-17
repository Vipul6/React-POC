import ActionTypes from '../constants/action-types';
import { initialState } from '../store/initialState';

export default function appReducer(state = initialState, action = '') {
  let nextState = state;

  switch (action.type) {
    case ActionTypes.GET_SEARCH:
      nextState = {
        ...state,
        isPageError: false,
        isLoaded: false
      };
      break;
    
    case ActionTypes.GET_FOOD_SUCCESS:
      nextState = {
        ...state,
        searchedData: action.value,
        isPageError: true,
        isLoaded: true,
        cartItem: []
      };
      break;

    case ActionTypes.GET_FOOD_FAILURE:
      nextState = {
        ...state,
        isPageError: true,
        isLoaded: false
      };
      break;

    case ActionTypes.ADD_TO_CART:
      nextState = {
        ...state,
        cartItem: [...state.cartItem, action.value]
      };
      break;

    default:
  }
  return nextState;
}
