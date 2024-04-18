export type User = {
    bananas: number;
    lastDayPlayed: string;
    longestStreak: number;
    name: string;
    stars: number;
    subscribed: boolean;
    uid: string;
    matched?: boolean;
    rank?: number;
};

export type UserDatabase = {
    [uid: string]: User;
};

export type reduxType = {
    userDatabase: User[];
    searchResult: User[] | false;
    topTenUsers: User[];
    sortByName: boolean;
    showLowestRanked: boolean;
    searchVal: string;
}

export type action = {
    type: string;
    payload: any;
}