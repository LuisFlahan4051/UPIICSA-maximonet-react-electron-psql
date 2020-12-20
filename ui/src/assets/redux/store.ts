import {createStore, combineReducers} from 'redux'
import currentUser from './reducers/currentUser'

const reducerRoot = combineReducers({
    currentUser: currentUser,
})

const store = createStore(reducerRoot)

export default store
