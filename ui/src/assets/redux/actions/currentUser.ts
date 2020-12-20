export const SET_CURRENT_USER = 'SET_CURRENT_USER'

function setCurrentUser_action(user: { id: String, user: String, loggedin: Boolean, admin: Boolean, root: Boolean,}){
    return {
        type: SET_CURRENT_USER,
        id: user.id,
        user: user.user,
        loggedin: user.loggedin,
        admin: user.admin,
        root: user.root,
    }
}

export default setCurrentUser_action