import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'

const configureStore = () => {
  const store = createStore(
    rootReducer
  )
  return store
}

export default configureStore
