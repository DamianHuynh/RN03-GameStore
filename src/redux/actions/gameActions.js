export const FETCHING_DATA = 'FETCHING_DATA';
export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS';
export const FETCHING_DATA_FAIL = 'FETCHING_DATA_FAIL';
export const SET_LIST_GAME = 'SET_LIST_GAME';
export const SET_GAME_DETAIL = 'SET_GAME_DETAIL';

export const getRequest = () => ({type: FETCHING_DATA});
export const getRequestSuccess = () => ({type: FETCHING_DATA_SUCCESS});
export const getRequestFail = () => ({type: FETCHING_DATA_FAIL});

export const setListGame = listGame => ({
  type: SET_LIST_GAME,
  payload: listGame,
});

export const setGameDetail = game => ({
  type: SET_GAME_DETAIL,
  payload: game,
});
