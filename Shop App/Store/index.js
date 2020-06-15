import { createStore } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extensions'

import reducers from './reducers'

export default createStore(reducers /*, composeWithDevTools() */)
