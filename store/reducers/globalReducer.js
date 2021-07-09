import { FILTER_PANEL } from "../types";

const initialState = {
    filterPanelOpen: true
}

export default function (state = initialState, action) {

    switch (action.type) {
        case FILTER_PANEL: {
            return {
                filterPanelOpen: action.status
            }
        }
        default: {
            return state
        }
    }
    
}