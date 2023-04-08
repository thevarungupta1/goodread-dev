import actionTypes from "../constants/action-types"

const initialState = {
    carts: []
}

const cartReducer = (state = initialState, { type, payload }) => {
    if(type === actionTypes.ADD_TO_CART){
        return {
          ...state,
            carts: [...state.carts, payload]
        }
    }
    return state
}

export default cartReducer;