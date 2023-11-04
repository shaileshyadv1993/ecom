import React from "react";
import {
  Button,
  Form,
  Modal,
  ModalBody,
  FloatingLabel,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "react-bootstrap";

const ViewProduct = ({ show, handleChange, handleClose, product }) => {
  // console.log("View:", product);
  return (
    <>
      <Modal show={show}>
        <Modal.Header className="m-auto">
          <h3>Product Details</h3>
        </Modal.Header>

        <Modal.Body>
          <Card key={product.id} style={{ width: "100%", height: "75%" }}>
            <CardHeader style={{ height: "60%" }}>
              <Card.Img src={product.thumbnail} className="h-75"></Card.Img>
            </CardHeader>
            <CardBody>
              <h2>{product.title}</h2>
              <p className="description">Brand: {product.brand}</p>
              <p className="description">Rating:{product.rating}</p>
              <p className="description">Price: ${product.price}</p>
              <p className="description">Details:{product.description}</p>
            </CardBody>
          </Card>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ViewProduct;
