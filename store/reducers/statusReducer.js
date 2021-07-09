import { FILTER_PANEL_STATUS, PRODUCT_DETILE_STATUS } from "../types";

const initialState = {
    product_detile: false,
    filter_panel: true,
    user_menu: false,
}

export default function status(state = initialState, action) {

    switch (action.type) {
        case PRODUCT_DETILE_STATUS: {
            return {
                ...state, 
                product_detile: action.status
            }
        }
        case FILTER_PANEL_STATUS: {
            return {
                ...state, 
                filter_panel: action.status
            }
        }
        default: {
            return state
        }
    }
    
}