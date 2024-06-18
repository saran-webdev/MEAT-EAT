import React, { useEffect } from "react";
import Mainnav from "../common/navbarfile";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Footer from "../common/footerfile";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200
    });
  }, []);

  return (
    <div>
      <Container fluid>
        <Row>
          <Mainnav />
        </Row>

        <Row>
          <div
            className=" d-flex justify-content-center align-items-center vh-100 flex-column "
            data-aos="fade-up"
          >
            <h1 className="text-center p-5">CONTACT</h1>

            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" placeholder="Message" required />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </Row>
        <Row data-aos="fade-up">
          <Footer />
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
