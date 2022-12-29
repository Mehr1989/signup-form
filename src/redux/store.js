import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {rootReducer} from '../redux/rootSlice'
const reducer = combineReducers({
 root : rootReducer  
})
export const store = configureStore({
  reducer
})

