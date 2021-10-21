import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// const middleware = [thunk]

const store = configureStore({
  reducer: persistedReducer,
  // middleware,
  middleware: [thunk]
  //  (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     thunk: true,
  //     serializableCheck: false,
  //   }),
})

export default store