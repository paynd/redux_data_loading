import { applyMiddleware, createStore } from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'

const createStoreWithMiddleware = applyMiddleware(thunk, createLogger())(createStore)
const store = createStoreWithMiddleware(reducer)

export default store
