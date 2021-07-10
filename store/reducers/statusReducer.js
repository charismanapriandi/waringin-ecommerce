import { FILTER_PANEL_STATUS, LIVE_CHAT_STATUS, PRODUCT_DETILE_STATUS } from "../types";

const initialState = {
    product_detile: false,
    filter_panel: true,
    live_chat: false
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
        case LIVE_CHAT_STATUS: {
            return {
                ...state,
                live_chat: action.status
            }
        }
        default: {
            return state
        }
    }
    
}