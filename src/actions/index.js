/**
 * Created by feizal on 3/3/17.
 */

import { Product, General } from '../constants'
import { get } from 'superagent';


// export const addProduct = (name, description) => {
//     return dispatch => {
//         setTimeout(() => {
//             dispatch(requestPostProduct(name, description))
//         }, 2000)
//     }
// };
//
// export const requestPostProduct = (name, description) => {
//     return {
//         type: Product.ADD,
//         success: true,
//         error: null,
//     }
// };
//
// export const removeProduct = (productId) => {
//     return dispatch => {
//         setTimeout(() => {
//             dispatch(requestRemoveProduct(productId))
//         }, 2000)
//     }
// };
//
// export requestRemoveProduct = (productId) => {
//     return {
//         type: Product.REMOVE,
//         success: true,
//         error: null,
//     }
// };

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

export const showErrorMessage = (message) => {
    return {
        type: General.SHOW_ERROR,
        error: message,
    }
};