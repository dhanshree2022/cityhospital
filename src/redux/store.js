import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from "./saga/rootSaga.saga";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['medicines','cart','auth']
}
const sagaMiddleware = createSagaMiddleware()
const middlewares=[thunk,sagaMiddleware]
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const cofigureStore = () => {
    let store = createStore(persistedReducer, applyMiddleware(...middlewares));

    sagaMiddleware.run(rootSaga)

    return store 
}

export let store = cofigureStore();
export let persistor = persistStore(store);