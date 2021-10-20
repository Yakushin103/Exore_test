import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './rootReducer'

// const middleware = [thunk]

const store = configureStore({
  reducer: rootReducer,
  // middleware,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: false,
    }),
})

export default store