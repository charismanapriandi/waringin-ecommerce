import { CART_MEMORY, CATEGORY_MEMORY, PRODUCT_DETIlE_PAYLOAD, PRODUCT_MEMORY, PRODUCT_SORTED, WISHLIST_MEMORY } from "../types"

const initialState = {
    product_list: null,
    category_list: null,
    cart_list: null,
    wish_list: null,
    product_detile_payload: null,
    product_sorted: null,
    active_user: null,
}

export default function memory(state = initialState, action) {

    switch (action.type) {
        case PRODUCT_MEMORY: {
            return {
                ...state,
                product_list: action.payload
            }
        }
        case CATEGORY_MEMORY: {
            return {
                ...state,
                category_list: action.payload
            }
        }
        case CART_MEMORY: {
            return {
                ...state,
                cart_list: action.payload
            }
        }
        case WISHLIST_MEMORY: {
            return {
                ...state,
                wish_list: action.payload
            }
        }
        case PRODUCT_DETIlE_PAYLOAD : {
            return {
                ...state,
                product_detile_payload: action.payload
            }
        }
        case PRODUCT_SORTED :{
            return {
                ...state,
                product_sorted: action.payload
            }
        }
        default : {
            return state
        }
    }
    
}