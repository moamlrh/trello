import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import reducers from './Reducer'
import createSaga from 'redux-saga'
import rootSaga from './saga'

const sagaMidlleware = createSaga()

export default createStore(reducers, applyMiddleware(sagaMidlleware))

sagaMidlleware.run(rootSaga)



