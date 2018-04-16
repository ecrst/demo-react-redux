import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';

const logger = createLogger({
    predicate: (getState, action) => !action.type.startsWith('@@redux-form')
});
const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);

export const store = createStoreWithMiddleware(reducers); 