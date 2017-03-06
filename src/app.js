/**
 * Created by feizal on 3/3/17.
 */

import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Router, Route, Animations, Schema } from 'react-native-redux-router'
import { rootReducers } from './reducers';
import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail'
import { NavBar } from './components/common/NavigationBar'

let initialState = {};
let store = createStore(rootReducers, initialState, applyMiddleware(ReduxThunk));

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={{flex:1}}>
                    <Router>
                        <Schema name="default" sceneConfig={Animations.FlatFloatFromRight} navBar={NavBar}/>
                        <Route name="launch" component={ProductList} title="Products" schema="default" initial={true} />
                        <Route name="productDetail" component={ProductDetail} title="Product Detail" schema="default"/>
                    </Router>
                </View>
            </Provider>
        );
    }
}

export default App