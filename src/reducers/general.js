/**
 * Created by feizal on 3/3/17.
 */

import { General } from '../constants'

const initialState = {};

export function generalReducers(state = initialState, action) {
    switch (action.type) {
        case General.SHOW_ERROR:
            return {
                ...state,
                error: action.error
            };
    }
    return state
}