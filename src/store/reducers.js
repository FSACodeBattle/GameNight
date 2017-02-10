import { combineReducers } from 'redux'
import locationReducer from './location'
import clientsReducer from './client'
import gameLobbyReducer from './gamelobby';
import usersReducer from './user';
import matchesReducer from './match';
import profilesReducer from './profile';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    clients: clientsReducer,
    gameLobby: gameLobbyReducer,
    user: usersReducer,
    match: matchesReducer,
    profile: profilesReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
