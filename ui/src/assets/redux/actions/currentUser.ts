export const SET_CURRENT_USER = 'SET_CURRENT_USER'

function setCurrentUser_action(user: { id: String, user: String, loggedin: Boolean, admin: Boolean, root: Boolean, active: Boolean}){
    return {
        type: SET_CURRENT_USER,
        id: user.id,
        user: user.user,
        loggedin: user.loggedin,
        admin: user.admin,
        root: user.root,
        active: user.active,
    }
}

export default setCurrentUser_action