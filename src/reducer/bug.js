import * as actions from '../actions/actionsTypes'

let lastId =0
const bugReducer = (state =[], action) => {
    switch (action.type) {
        case actions.ADD_BUG:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved:false
                }

            ]
         case actions.REMOVE_BUG:
                return state.filter(bug => bug.id !== action.payload.id)

         default:
            return state
    
    }
}

export default bugReducer
