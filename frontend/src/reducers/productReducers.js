import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST,
     PRODUCT_LIST_SUCCESS, PRODUCT_DETAILS_REQUEST,
      PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL   } from "../constants/productConstants";

const initialState = {
    loading: false,
    products: [],
    error: ''
}

const  productListReducer = (state = initialState, action ) => {

    switch(action.type){
        case PRODUCT_LIST_REQUEST: 
            return {
                ...state,
                loading:true
            };
        case PRODUCT_LIST_SUCCESS:
            return{
                loading:false,
                 products: action.payload,
                 error: ''
            };
        case PRODUCT_LIST_FAIL:
            return {
                loading:false,
                products: [],
                 error:action.payload
             }
        default: return state;
    }
}

const initialProductDetailsState = {
    loading: false,
    product: {} ,
    error: ''
}

const  productDetailsReducer = (state = initialProductDetailsState, action ) => {

    switch(action.type){
        case PRODUCT_DETAILS_REQUEST: 
            return {
                ...state,
                loading:true
            };
        case PRODUCT_DETAILS_SUCCESS:
            return{
                loading:false,
                 product: action.payload,
                 error: ''
            };
        case PRODUCT_DETAILS_FAIL:
            return {
                loading:false,
                product: [],
                 error:action.payload
             }
        default: return state;
    }
}

export {productListReducer, productDetailsReducer} ;