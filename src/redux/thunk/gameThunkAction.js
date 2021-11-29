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
        dispatch(getListGameSuccess(listGame));
      })
      .catch(error => {
        dispatch(getListGameFail());
        console.log(error);
      });
  };
};

export const getRequestGameById = id => {
  return async dispatch => {
    try {
      const res = await getGameById(id);
      const game = mapIP(res.data);
      dispatch(getGameDetailSuccess(game));
    } catch (error) {
      console.log(error);
      dispatch(getGameDetailFail());
    }
  };
};
