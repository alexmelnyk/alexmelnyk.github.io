import { initialState } from './appConfig.js';

import { SET_ASSET, SET_SORT_TYPE, SET_FILTER_TYPE } from './constants.js';

const appReducer = (state = initialState, action) => {
    
        switch (action.type) {
            case SET_ASSET:
                let assets = action.assets;
                if (state.sortBy !== 'default') {
                    assets.sort((a,b) => {
                        if (a[state.sortBy] < b[state.sortBy])
                            return -1;
                        if (a[state.sortBy] > b[state.sortBy])
                            return 1;
                        return 0;
                    });
                }

                if (state.filterBy !== 'default') {
                    assets = assets.filter((asset) => {
                        return state.filterName === 'assetName' || state.filterName === 'type'
                            ? asset[state.filterName] === state.filterBy
                            : parseInt(asset[state.filterName], 10) === parseInt(state.filterBy, 10) 
                    });
                }

                return Object.assign({}, state, {
                    assets: assets
                });

            case SET_SORT_TYPE:
                return Object.assign({}, state, {
                    sortBy: action.sortType
                });

            case SET_FILTER_TYPE:
                return Object.assign({}, state, {
                    filterBy: action.filterType,
                    filterName: action.filterName
                });

            default:
                return state;
        }
    }
    
export default appReducer