import * as actions from '../actions/actionsTypes'


const counterReducer = (state=0,action) => {
    switch(action.type){
        case actions.INCREMENT:
            return state + action.payload;
        case actions.DECREMENT:
            return state-1;
        default:
            return state
    }
}

export default counterReducer;
