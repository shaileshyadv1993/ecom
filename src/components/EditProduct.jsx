import React from "react";
import { Button, Form, Modal, ModalBody, FloatingLabel } from "react-bootstrap";

const EditProduct = ({
  show,
  handleEditChange,
  handleClose,
  product,
  editSave,
}) => {
  return (
    <>
      <Modal show={show} style={{ height: "auto" }}>
        <Modal.Header className="m-auto">
          <h3>Edit Product</h3>
        </Modal.Header>

        <Modal.Body style={{ height: "auto" }}>
          <Form>
            <FloatingLabel
              controlId="floatingInput"
              label="Image"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Product-image"
                onChange={handleEditChange}
                name="thumbnail"
                value={product.thumbnail}
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
                onChange={handleEditChange}
                name="title"
                value={product.title}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingDes"
              label="Description"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Discount Percentage"
                onChange={handleEditChange}
                name="description"
                value={product.description}
                readOnly
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingDescount"
              label="Discount Percentage"
            >
              <Form.Control
                type="text"
                placeholder="Discount Percentage"
                onChange={handleEditChange}
                name="discountPercentage"
                value={product.discountPercentage}
              />
            </FloatingLabel>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={editSave}>
            Edit Product
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditProduct;
