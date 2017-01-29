import { combineReducers } from 'redux'
import locationReducer from './location'

const rootReducer = combineReducers({
    location: locationReducer
})

export default rootReducer
