import { UserActionTypes } from "./user.types"

const INITIAL_STATE = {
    currentUser: null
}
// State -> last state / initial state
// action -> str value, what specific action to fire
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case UserActionTypes.SET_CURRENT_USER:
            return{
                ...state,
                currentUser: action.payload
            }
        default:
            return state
    }
}

export default userReducer