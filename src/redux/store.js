import { configureStore } from '@reduxjs/toolkit'
import {reducer} from '../redux/rootSlice'

export const store = configureStore({
  reducer
})

