import { combineReducers } from 'redux'

import headsReducers from './headsReducers'


const reducer = combineReducers({
  heads: headsReducers

})

export default reducer