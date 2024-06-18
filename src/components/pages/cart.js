// Cart.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Row, Col, Container, Form } from "react-bootstrap";
import { removeFromCart } from "../Redux/ReduxUserData/UserDataAction";
import {
  AiOutlineDelete,
  AiFillPlusCircle,
  AiOutlineMinusCircle
} from "react-icons/ai";
import Mainnav from "../common/navbarfile";
import Footer from "../common/footerfile";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartData.cartItems);

  const handleRemoveFromCart = (cardId) => {
    dispatch(removeFromCart(cardId));
  };

  // Use an object to store quantity for each product
  const [quantities, setQuantities] = useState({});
  console.log(quantities);

  const handleIncrease = (cardId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [cardId]: (prevQuantities[cardId] || 0) + 1
    }));
  };

  const handleDecrease = (cardId) => {
    if (quantities[cardId] > 1) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [cardId]: prevQuantities[cardId] - 1
      }));
    }
  };

  return (
    <div>
      <Container fluid>
        <Row>
          <Mainnav />
        </Row>
        <h2 className="text-center py-4">Shopping Cart</h2>
        <Row>
          {cartItems.map((card) => (
            <Col key={card._id}>
              <Card style={{ width: "16rem" }} className="mb-5">
                <Card.Img variant="top" src={card.imageSrc} />
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Title>{card.rate}</Card.Title>
                  <div className="d-flex justify-content-between gap-3">
                    <Button
                      variant="primary"
                      onClick={() => {
                        handleRemoveFromCart(card._id);
                      }}
                    >
                      <AiOutlineDelete className="fs-3" />
                    </Button>
                    <div>
                      <Button
                        variant="primary"
                        className="d-flex align-items-center p-2"
                      >
                        <AiFillPlusCircle
                          onClick={() => handleIncrease(card._id)}
                          className="fs-3 mx-2"
                        />
                        <div className="d-flex justify-content-center align-items-center">
                          <Form style={{ width: "50px" }}>
                            <Form.Group>
                              <Form.Control
                                type="number"
                                value={quantities[card._id] || 1}
                                readOnly
                              />
                            </Form.Group>
                          </Form>
                        </div>
                        <AiOutlineMinusCircle
                          onClick={() => handleDecrease(card._id)}
                          className="fs-3 mx-2"
                        />
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          <span>
            <Button variant="primary">Proceed To Checkout</Button>
          </span>
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    </div>
  );
};

export default Cart;
