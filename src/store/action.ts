// actions.js
import { SORT_USERS_BY_BANANAS, SEARCH_USER_BY_NAME, SET_SEARCH_VALUE, SHOW_LOWEST_RANKED } from './actionTypes';

export const sortUsersByBananas = () => ({
  type: SORT_USERS_BY_BANANAS,
});

export const searchUserByName = () => ({
  type: SEARCH_USER_BY_NAME,
});

export const setSearchValue = (name: string) => ({
  type: SET_SEARCH_VALUE,
  payload: name,
});

export const showLowestRankedUsers = () => ({
  type: SHOW_LOWEST_RANKED,
});
