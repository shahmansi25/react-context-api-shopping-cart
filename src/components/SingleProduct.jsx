import React from 'react';
import {Card,Button} from 'react-bootstrap';
import Rating from './Rating';
import { CartState } from '../context/Context';

const SingleProduct = ({ product }) => {
    const { state: { cart }, dispatch } = CartState();

  return (
      <div className="products"> 
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.image}  alt={product.name}/>
            <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Subtitle>
                      <span>${product.price.split(".")[0]}</span>
                      {product.fastDelivery ? <div>Fast Delivery</div> : <div>4 days Delivery</div>}
                      <Rating rating={ product.ratings } />
                  </Card.Subtitle>
            
                  {cart.some((c) => c.id === product.id) ? (<Button className ="product-button" variant="danger"  onClick = {()=>{dispatch({ type: 'REMOVE_FROM_CART', payload: product })}}>Remove From Cart</Button>) : (
                      <Button className ="product-button" onClick={() => { dispatch({ type: 'ADD_TO_CART', payload: product }) }} disabled={!product.inStock}> { product.inStock ? 'Add to Cart':'Out of stock'}</Button>
                  )}
                           

            </Card.Body> 
          </Card>
      </div>
  )
}

export default SingleProduct