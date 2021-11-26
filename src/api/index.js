import axios from 'axios';
import {detectUrlByPlatform} from '../utils/common';

export const getListGame = () => {
  const baseUrl = detectUrlByPlatform();
  return axios({method: 'GET', url: `${baseUrl}/games`});
};

export const getGameById = id => {
  const baseUrl = detectUrlByPlatform();
  return axios({method: 'GET', url: `${baseUrl}/games/${id}`});
};
