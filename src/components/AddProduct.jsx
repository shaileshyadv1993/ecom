import React, { useState } from "react";
import { Button, Form, Modal, ModalBody, FloatingLabel } from "react-bootstrap";

const AddProduct = ({ show, handleClose, addProductHandler, handleChange }) => {
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleshow = () => setShow(true);
  // console.log("Addproduct");
  return (
    <>
      <Modal show={show}>
        <Modal.Header className="m-auto">
          <h3>Add New Product</h3>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <FloatingLabel
              controlId="floatingInput"
              label="Image"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Product-image"
                // onChange={(e) => setImage(e.target.value)}
                onChange={handleChange}
                name="thumbnail"
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingTitle"
              label="Title"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Title"
                onChange={handleChange}
                name="title"
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingDes"
              label="Description"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Description"
                onChange={handleChange}
                name="description"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingDes"
              label="Price"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Price"
                onChange={handleChange}
                name="price"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingDes"
              label="category"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="category"
                onChange={handleChange}
                name="category"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingDes"
              label="Discount Percentage"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="discountPercentage"
                onChange={handleChange}
                name="discountPercentage"
              />
            </FloatingLabel>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={addProductHandler}>
            Add Product
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddProduct;
