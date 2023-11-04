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
      <Modal show={show}>
        <Modal.Header className="m-auto">
          <h3>Edit Product</h3>
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

            <FloatingLabel controlId="floatingDes" label="Description">
              <Form.Control
                type="text"
                placeholder="Description"
                onChange={handleEditChange}
                name="description"
                value={product.description}
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
