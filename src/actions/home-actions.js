import ActionTypes from '../constants/action-types';
import { request } from '../services/axiosHelper';

const getSearchedFood = () => (dispatch) => {
  
  dispatch({
    type: ActionTypes.GET_SEARCH,
  });

  const requestObject = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    url: '/philadelphia.json',
  };

  return request(requestObject).then((response) => {
    dispatch({
      type: ActionTypes.GET_FOOD_SUCCESS,
      value: response.data,
    });
    return response;
  })
  .catch((error) => {
    dispatch({
      type: ActionTypes.GET_FOOD_FAILURE,
      value: error,
    });
  });
};

const addToCart = action => ({
  type: ActionTypes.ADD_TO_CART,
  value: action
});

export {
  getSearchedFood,
  addToCart
};
