import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct} from '../actions/productActions';


function ProductScreen(props) {
    const [qty, setQty] = useState(1);

    console.log(props.match.params.id) // get the id

    // match product to show to the current product id
   // const product = data.products.find(x=> x._id === props.match.params.id);

const productDetails = useSelector(state => state.productDetails);
const {product, loading, error} = productDetails;
   const dispatch =  useDispatch();





   useEffect(() => {
       dispatch(detailsProduct(props.match.params.id));//id
       
   }, []);

   const handleAddToCart = () =>{
       props.history.push("/cart/" + props.match.params.id + "?qty=" + qty);
   }


   

    return <div>
                <div className="back-to-result">
                    <Link to="/">Back to results</Link>
                </div>
                {loading ? <div>Loading...</div> :
                error ? <div>{error}</div>:

                (

                    <div className="details">

                        <div className="details-image">
                            <img src={product.image} alt="product" />
                        </div>

                        
                        
                        <div className="details-info">
                            <ul>
                                <li><h4>{product.name}</h4> </li>
                                <li><h4>{product.rating} Stars ({product.numReviews} Reviews)</h4> </li>
                                <li> <strong>{product.price}</strong></li>
                                <li> Description:
                                    <div>{product.description}</div></li>
                            </ul>
                        

                        </div>

                        <div className="details-action">
                            <ul>
                                <li>
                                    Price: <strong> $ {product.price}</strong>
                                </li>
                                <li>
                                    Status: {product.countInStock > 0 ?
                                      "In Stock"
                                      :
                                      "Out of Stock"
                                    }
                                </li>
                                <li>
                                    QTY: <select value={qty} onChange={(e)=>{setQty(e.target.value)}}>
                                     {[...Array(product.countInStock).keys()].map(x=>
                         <option  key={x+1} value={x+1}>{x+1}</option>                                        )}   
                                    </select>
                                </li>
                                <li>
                                    {product.countInStock > 0 &&
                                    <button onClick={handleAddToCart} className="button primary">Add to Cart</button>
                              
                                }
                                    
                                    </li>
                            </ul>
                            
                        </div>


                    </div>
            )
                }

           
        </div>
    
}

export default ProductScreen;