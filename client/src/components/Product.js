import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>

      <Card.Body>
        <Link
          style={{ textDecorationLine: 'none' }}
          to={`/product/${product._id}`}
        >
          <Card.Title className='my-2'>{product.name}</Card.Title>
        </Link>

        <Card.Text>
          <Rating
            rating={product.rating}
            numReviews={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3' style={{ textAlign: 'center' }}>
          $ {product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
