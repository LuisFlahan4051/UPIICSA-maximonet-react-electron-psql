import {SET_CURRENT_USER} from '../actions/currentUser'

const defaultState = {
    id: '',
    user: '',
    loggedin: false,
    admin: false,
    root: false,
    active: false,
}

function currentUser_reducer(state = defaultState, userAction: { type: String; id: String; user: String; loggedin: Boolean; admin: Boolean; root: Boolean; active: Boolean;}) {
    switch (userAction.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                id: userAction.id,
                user: userAction.user,
                loggedin: userAction.loggedin,
                admin: userAction.admin,
                root: userAction.root,
                active: userAction.active,
            }
        default: return state
    }
}

export default currentUser_reducer