import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import ProductList from './components/productlist';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="productList" component={ProductList} title="Product List" initial/>
        </Router>
    );
};

export default RouterComponent;
