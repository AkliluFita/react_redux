import * as actions from './actionsTypes'

// counter actions
export const increment = (nu) => {
    return {
        type: actions.INCREMENT,
        payload: nu
    }
}


export const decrement = () => {
    return {
        type: actions.DECREMENT
    }
}


// bug actions
export const addBug = (description) => {
    return {
        type: actions.ADD_BUG,
        payload:{
            description: description
        }
    }
}

export const removeBug = () => {
    return {
        type: actions.REMOVE_BUG,
        payload:{
            id: 1
        }
    }
}
