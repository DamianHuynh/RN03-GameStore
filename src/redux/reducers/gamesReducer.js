import {
  FETCHING_DATA,
  GET_GAME_DETAIL_FAIL,
  GET_GAME_DETAIL_SUCCESS,
  GET_LIST_GAME_FAIL,
  GET_LIST_GAME_SUCCESS,
} from '../actions/gameActions';

const initialState = {
  listGame: [],
  gameDetail: {},
  isFetching: false,
};

const gameReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCHING_DATA:
      return {...state, isFetching: true};
    case GET_LIST_GAME_SUCCESS:
      // state.listGame = payload;
      // return {...state};
      return {...state, listGame: payload, isFetching: false};
    case GET_LIST_GAME_FAIL:
      return {...state, isFetching: false};

    case GET_GAME_DETAIL_SUCCESS:
      console.log(payload);
      return {...state, gameDetail: payload, isFetching: false};
    case GET_GAME_DETAIL_FAIL:
      return {...state, isFetching: false};

    default:
      return state;
  }
};

export default gameReducer;
