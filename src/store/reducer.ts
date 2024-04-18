// reducer.js
import { initialState } from './initialState';
import { SORT_USERS_BY_BANANAS, SEARCH_USER_BY_NAME, SET_SEARCH_VALUE, SHOW_LOWEST_RANKED } from './actionTypes';
import { User, action, reduxType } from '../models/app';

const reducer = (state: reduxType = initialState, action: action) => {
  switch (action.type) {
    case SEARCH_USER_BY_NAME:
      // SEARCH USER IN TOP TEN 
      let inTopTen = state.topTenUsers.find((user: User) =>
        user.name.toUpperCase().replace(/ /g, '') == state.searchVal.toUpperCase().replace(/ /g, ''))
      if (inTopTen) {
        return {
          ...state,
          showLowestRanked: false,
          searchResult: state.topTenUsers.map((user, index) => {
            return {
              ...user,
              ...(user.uid == inTopTen?.uid && { ...user, matched: true }),
              rank: index + 1
            }
          }),
        };
      } else {
        // IF USER IS NOT PRESENT IN TOP TEN SEARHC IN REMAINING LIST
        let exists = state.userDatabase.find((user: User) =>
          user.name.toUpperCase().replace(/ /g, '') == state.searchVal.toUpperCase().replace(/ /g, ''))
        if (exists) {
          const topTen = [...state.topTenUsers]
          topTen[9] = exists
          return {
            ...state,
            showLowestRanked: false,
            searchResult: topTen.map((user, index) => {
              return {
                ...user,
                ...(user.uid == exists?.uid && { ...user, matched: true }),
                rank: user.uid == exists?.uid ? state.userDatabase.findIndex(user => user.uid === exists?.uid) + 1 : index + 1
              }
            }),
          };
        } else {
          return {
            ...state,
            showLowestRanked: false,
            searchResult: false,
          }
        }
      }

    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchVal: action.payload,
      };

    case SHOW_LOWEST_RANKED:
      const list = state.userDatabase

      const lowestRanked = list.slice(-10).sort((a, b) => a.name.localeCompare(b.name))
        .map((user) => {
          return {
            ...user,
            rank: state.userDatabase.findIndex(x => x.uid === user?.uid)
          }
        })
      return {
        ...state,
        searchResult: lowestRanked,
        showLowestRanked: true,
      };
    default:
      return state;
  }
};

export default reducer;
