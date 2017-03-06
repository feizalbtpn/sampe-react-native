/**
 * Created by feizal on 3/3/17.
 */

import { Product } from '../constants'

const initialState = {};

export function productReducers(state = initialState, action) {
    switch (action.type) {
        case Product.SHOW_LOADING:
            return {
                ...state,
                loading: action.loading
            };
        case Product.SHOW_LIST:
            return {
                ...state,
                products: action.products,
                loading: false,
            };
        case Product.SHOW_DETAIL:
            return {
                ...state,
                product: action.product,
                loading: false,
            };
        default:
            return state
    }
}
