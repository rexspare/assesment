import Users from '../data/index.json'

const sortedData = Object.values(Users).sort((a, b) => b.bananas - a.bananas)
export const initialState = {
    userDatabase: sortedData,
    searchResult: [],
    topTenUsers: sortedData.slice(0, 10),
    sortByName: false,
    showLowestRanked: false,
    searchVal: ""
};