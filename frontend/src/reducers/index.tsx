
/*
* Reducers should be saved in components not in the reducers folder
*/

import { combineReducers } from 'redux';

const nameReducer = (state = 'World', action: any) => {
    switch (action.type) {
        default:
            return state;
    }
};

const rootReducer = combineReducers({name: nameReducer});

export default rootReducer;