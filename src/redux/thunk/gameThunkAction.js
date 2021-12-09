import {getGameById, getListGame} from '../../api';
import {mapIP} from '../../utils/common';
import {
  getGameDetailFail,
  getGameDetailSuccess,
  getListGameFail,
  getListGameSuccess,
  getRequest,
} from '../actions/gameActions';

export const getRequestListGame = () => {
  return dispatch => {
    dispatch(getRequest());
    getListGame()
      .then(res => {
        const listGame = mapIP(res.data);
        setTimeout(() => {
          dispatch(getListGameSuccess(listGame));
        }, 5000);
      })
      .catch(error => {
        dispatch(getListGameFail());
        console.log(error);
      });
  };
};

export const getRequestGameById = id => {
  return async dispatch => {
    dispatch(getRequest());
    try {
      const res = await getGameById(id);
      const game = mapIP(res.data);
      setTimeout(() => {
        dispatch(getGameDetailSuccess(game));
      }, 5000);
    } catch (error) {
      console.log(error);
      dispatch(getGameDetailFail());
    }
  };
};
