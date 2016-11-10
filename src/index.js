import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducers'

import customStyle from './styles/custom.scss'
import mainStyle from './styles/main.scss'

import MainLayout from './layouts/MainLayout'
import BodyContainer from './components/BodyContainer'



const initialState = {
    tweets:[
        {id: 1, name: 'Nova', username: 'jaynarol', tweetText: 'Hello', timestamp: 1234},
        {id: 2, name: 'Nova', username: 'jaynarol', tweetText: 'Again', timestamp: 5678}
    ]
}
const store = createStore(rootReducer, initialState, window.devToolsExtension && window.devToolsExtension())

if (module.hot) {
    module.hot.accept('./reducers', () => {
        const nextRootReducer = require('./reducers').default

        store.replaceReducer(nextRootReducer)
    })
}

const App = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={MainLayout}>
                <IndexRoute component={BodyContainer}/>
                <Route path=':ownerUsername' component={BodyContainer}/>
            </Route>
        </Router>
    </Provider>
)
ReactDOM.render(App, document.getElementById('react-root'))
