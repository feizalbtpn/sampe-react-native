/**
 * Created by feizal on 3/3/17.
 */

import { Product, General } from '../constants'
import { get } from 'superagent';

export const getProducts = () => {
    return (dispatch) => {
        fetch('http://localhost:8000/products')
            .then((response) => {
                return response.json()
            })
            .then((response) => {
                dispatch(loadProductsSuccess(response.products))
            })
            .catch((error) => {
                dispatch(showErrorMessage(error.toString()))
            });
    };
};

export const getProductDetail = (productId) => {
    return (dispatch) => {
        fetch(`http://localhost:8000/product/${productId}`)
            .then((response) => {
                return response.json()
            })
            .then((response) => {
                dispatch(loadProductSuccess(response.product))
            })
            .catch((error) => {
                dispatch(showErrorMessage(error.toString()))
            })
    }
}

export const showLoading = () => {
    return {
        type: Product.SHOW_LOADING,
        loading: true,
    }
};

export const loadProductsSuccess = (products) => {
    return {
        type: Product.SHOW_LIST,
        products: products,
    };
};

export const loadProductSuccess = (product) => {
    return {
        type: Product.SHOW_DETAIL,
        product: product,
    }
};

export const showErrorMessage = (message) => {
    return {
        type: General.SHOW_ERROR,
        error: message,
    }
};