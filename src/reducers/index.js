import {combineReducers} from 'redux'
import {routerStateReducer} from 'redux-router'
import tweetsReducer from './tweets'

const rootReducer = combineReducers({
    tweets: tweetsReducer,
    router: routerStateReducer
})

export default rootReducer