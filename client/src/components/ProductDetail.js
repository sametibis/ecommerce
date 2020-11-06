import React from 'react'
import { Link } from 'react-router-dom'
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from 'react-bootstrap'
import Rating from './Rating'
import products from '../products'

const ProductDetail = ({ match, rating, numReviews }) => {
  const product = products.find((product) => product._id === match.params.id)

  return (
    <>
      <Link className='btn btn-sm btn-warning my-2' to='/'>
        {' '}
        Go Back{' '}
      </Link>
      <Row className='my-2'>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid></Image>
        </Col>

        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroupItem>
              <h2>{product.name}</h2>
            </ListGroupItem>
            <ListGroupItem>
              <Rating
                rating={product.rating}
                numReviews={`${product.numReviews} reviews`}
              />
            </ListGroupItem>
            <ListGroupItem>
              <h4>Price: $ {product.price}</h4>
            </ListGroupItem>
            <ListGroupItem>{product.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroupItem>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong> $ {product.price} </strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Stock:</Col>
                  <Col>
                    {product.countInStock > 0 ? `In stock` : 'Out of stock.'}
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                {product.countInStock > 0 ? (
                  <Button className='btn btn-block' type='button'>
                    Add to Cart
                  </Button>
                ) : (
                  <Button
                    className='btn btn-block btn-danger'
                    type='button'
                    disabled
                  >
                    Add to Cart
                  </Button>
                )}
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductDetail
