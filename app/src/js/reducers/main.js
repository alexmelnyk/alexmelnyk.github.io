const initialState = 1;

const main = (state = initialState, action) => {
    switch (action.type){
        case 'SET_MAIN':
            return action.main;
        default:
            return state;
    }	
}

export default main;