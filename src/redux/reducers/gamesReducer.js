import {
  FETCHING_DATA,
  FETCHING_DATA_FAIL,
  FETCHING_DATA_SUCCESS,
  SET_GAME_DETAIL,
  SET_LIST_GAME,
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
    case FETCHING_DATA_SUCCESS:
      return {...state, isFetching: false};
    case FETCHING_DATA_FAIL:
      return {...state, isFetching: false};
    case SET_LIST_GAME:
      state.listGame = payload;
      return {...state};
    //return {...state, listGame: payload};

    case SET_GAME_DETAIL:
      // console.log(payload);
      return {...state, gameDetail: payload};

    default:
      return state;
  }
};

export default gameReducer;
