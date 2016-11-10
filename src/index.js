import React from 'react'
import ReactDOM from 'react-dom'
import {ReduxRouter, reduxReactRouter} from 'redux-router'

import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import {createHistory} from 'history'
import thunk from 'redux-thunk'
import throttle from 'lodash/throttle'

import rootReducer from './reducers'
import routes from './routes'
import {loadState, saveState} from './utils/localStorages'
import customStyle from './styles/custom.scss'
import mainStyle from './styles/main.scss'

const preloadedState = loadState()
const store = createStore(
    rootReducer,
    preloadedState,
    compose(
        applyMiddleware(thunk),
        reduxReactRouter({routes, createHistory}),
        window.devToolsExtension && window.devToolsExtension()
    )
)
store.subscribe(throttle(() => {
    saveState({
        auth: store.getState().auth,
    })
}, 1000))

if (module.hot) {
    module.hot.accept('./reducers', () => {
        const nextRootReducer = require('./reducers').default

        store.replaceReducer(nextRootReducer)
    })
}

const App = (
    <Provider store={store}>
        <ReduxRouter>
            { routes }
        </ReduxRouter>
    </Provider>
)

ReactDOM.render(App, document.getElementById('react-root'))
