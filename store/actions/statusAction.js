import { FILTER_PANEL_STATUS, PRODUCT_DETILE_STATUS } from "../types"

export const openProductDetile = () => async dispatch => {
    dispatch({
        type: PRODUCT_DETILE_STATUS,
        status: true
    })
}

export const closeProductDetile = () => async dispatch => {
    dispatch({
        type: PRODUCT_DETILE_STATUS,
        status: false
    })
}

export const openFilter = () => async dispatch => {
    dispatch({
        type: FILTER_PANEL_STATUS,
        status: true
    })
}

export const closeFilter = () => async dispatch => {
    dispatch({
        type: FILTER_PANEL_STATUS,
        status: false
    })
}