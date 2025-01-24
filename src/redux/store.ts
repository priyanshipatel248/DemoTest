import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import your storage module accordingly
import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';

import authReducer from './slice/authSlice';


import eventReducer from './slice/eventSlice'
 import '../../rectrotonConfig'
const rootReducer = combineReducers({
  // Add your reducers here

  authReducer,


  eventReducer 

  // Additional reducers...
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage, // Use AsyncStorage or any other storage module as needed
  // Whitelist any reducers you want to persist, for instance:
   whitelist: ['authReducer','eventReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// export type RootState = ReturnType<typeof rootReducer>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const persistor = persistStore(store);
