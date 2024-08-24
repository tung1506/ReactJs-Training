import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootReducer } from './reducers/rootReducer';
import rootEpic from './epics/rootEpic';

const epicMiddleware = createEpicMiddleware(rootEpic());
const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

export default store;
