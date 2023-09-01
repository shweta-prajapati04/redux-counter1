import React from 'react'
import { DEC, INC } from './ActionType';
let initialState=5;
export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case INC:
            return state + 1;
        case DEC:
            return state>0? state - 1:state;
        default:
            return state;
    }

    return (
        <div>Reducer</div>
    )
}
