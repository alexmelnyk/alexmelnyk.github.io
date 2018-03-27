import { SET_ASSET, SET_SORT_TYPE, SET_FILTER_TYPE } from './constants.js';

export const setAsset = (assets) => {
    return {
        type: SET_ASSET,
        assets: assets
    };
};

export const setSortType = (sortType) => {
    return {
        type: SET_SORT_TYPE,
        sortType: sortType
    };  
};

export const setFilterType = (filterType, filterName) => {
    return {
        type: SET_FILTER_TYPE,
        filterType: filterType,
        filterName: filterName
    };  
};