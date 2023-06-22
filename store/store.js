import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import AsyncStorage from '@react-native-community/async-storage';
// import { storage } from 'redux-persist/es/storage';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root', 
    storage: AsyncStorage
};

const rootReducer = combineReducers({user: userReducer});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// configureStore will automaticall pass the object of reducers to combineReducer 
export const store = configureStore({
  reducer: persistedReducer, 
  middleware: [thunk]
});

export const persistor = persistStore(store);