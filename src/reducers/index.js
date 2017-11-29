import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import AppReducer from './app-reducer'

const reducers = {
  appStore: AppReducer,
  form: formReducer
}

const rootReducer = combineReducers(reducers)

export default rootReducer
