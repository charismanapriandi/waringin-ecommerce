import axios from "axios"
import { 
    CATEGORY_MEMORY,
    PRODUCT_DETIlE_PAYLOAD,
    PRODUCT_MEMORY,
    PRODUCT_SORTED,
    CART_MEMORY,
    WISHLIST_MEMORY,
} from "../types"

// data fetcher 
export const getAllProduct = () => async dispatch => {
    
    const res = await axios.get('/data/productTester.json')
    const data = await res.data

    await dispatch({
        type: PRODUCT_MEMORY,
        payload: data
    })
}

export const getAllCategory = () => async dispatch => {

    const res = await axios.get('/data/categoryTester.json')
    const data = await res.data

    await dispatch({
        type: CATEGORY_MEMORY,
        payload: data
    })
}

export const getAllCart = () => async dispatch => {

    const res = await axios.get('/data/cartTester.json')
    const data = await res.data

    await dispatch({
        type: CART_MEMORY,
        payload: data
    })
    
}

export const getAllWishlist = () => async dispatch => {

    const res = await axios.get('/data/wishlistTester.json')
    const data = res.data

    await dispatch({
        type: WISHLIST_MEMORY,
        payload: data
    })
    
}

export const setProductDetile = (data) => async dispatch => {

    await dispatch({
        type: PRODUCT_DETIlE_PAYLOAD,
        payload: data
    })
    
}

export const sortProductByHigherPrice = (data) => async dispatch => {

    await dispatch({
        type: PRODUCT_SORTED,
        payload: data
    })
    
}