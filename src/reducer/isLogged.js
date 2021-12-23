import * as actions from '../actions/actionsTypes'

const isLoggedIn = (state=false,action) => {
    switch(action.type){
        case actions.SIGN_IN:
            return !state;
        default:
            return state
    }
}

export default isLoggedIn;