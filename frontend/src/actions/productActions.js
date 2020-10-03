
import Axios from "axios";
import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL  } from "../constants/productConstants";

export const listProducts = () => async (dispatch) => {

        try {
            dispatch({type: PRODUCT_LIST_REQUEST});
            const {data} = await Axios.get("/api/products");
            dispatch(
                {
                    type:PRODUCT_LIST_SUCCESS,
                    payload: data
                }
                );
        }

        catch(error) {
            dispatch({type:PRODUCT_LIST_FAIL, payload: error.message});
        }


}

/*action creators*/
const fetchProductDetailsSuccess = data =>{
    return {
        type: PRODUCT_DETAILS_SUCCESS,
        payload: data
    }
}




export const detailsProduct = (productId) =>{
    return (dispatch) => {
        dispatch({type:PRODUCT_DETAILS_REQUEST, payload:productId})
        Axios.get("/api/product/" + productId)
        .then(response => {      
            const singleProduct = response.data //array of users
            dispatch(fetchProductDetailsSuccess(singleProduct))
        })
        .catch(error => {
            dispatch({type:PRODUCT_DETAILS_FAIL, payload: error.message});
        })
    }
}

