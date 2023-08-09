import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import tempReducer from './temp/reducer';


const rootReducer = combineReducers({
  tempReducer
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['languageReducer', 'userInformationReducer'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

type RootState = ReturnType<typeof rootReducer>

const store = createStore(persistedReducer, applyMiddleware(thunk));

let persistor = persistStore(store); 
export {store, persistor};
