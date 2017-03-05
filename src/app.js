/**
 * Created by feizal on 3/3/17.
 */

import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { rootReducers } from './reducers';
import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail'

import { Router, Route } from 'react-native-redux-router'

let initialState = {};
let store = createStore(rootReducers, initialState, applyMiddleware(ReduxThunk));

class App extends React.Component {
    componentWillMount() {
        store.dispatch
    }
    render() {
        return (
            <Provider store={store}>
                <View style={{flex:1}}>
                    <Router>
                        <Route name="launch" component={ProductList} title="Products" initial={true} />
                        <Route name="productDetail" component={ProductDetail} title="Product Detail"/>
                    </Router>
                </View>
            </Provider>
        );
    }
}

export default App