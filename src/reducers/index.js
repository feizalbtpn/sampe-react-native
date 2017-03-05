/**
 * Created by feizal on 3/3/17.
 */

import { combineReducers } from 'redux'
import { productReducers } from './product'
import { generalReducers } from './general'
import { routerReducer } from 'react-native-redux-router'

export const rootReducers = combineReducers({
    productReducers,
    generalReducers,
    routerReducer,
});
