import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Button,
  Nav,
} from "react-bootstrap";

const ProductList = ({ product, deleteHandler, editHandler, viewHandler }) => {
  return (
    <>
      <Card key={product.id} style={{ width: "350px", height: "auto" }}>
        <CardHeader className="h-50 w-100">
          <Card.Img src={product.thumbnail} className="h-100"></Card.Img>
        </CardHeader>
        <CardBody>
          <h2>
            {product.title.length > 10
              ? product.title.slice(0, 10) + "..."
              : product.title}
          </h2>
          <p>
            <b>Price : </b> ${product.price}
          </p>
          <p>
            <b>Discount : </b>
            {product.discountPercentage} %
          </p>
          <p>
            <b>Discount Amount : </b> $
            {((product.discountPercentage * product.price) / 100).toFixed(2)}
          </p>
          <p>
            <b>Total : </b>$
            {(
              product.price -
              (product.discountPercentage * product.price) / 100
            ).toFixed(2)}
          </p>
          {/* <p className="description">
            {product.description.length > 66
              ? product.description.slice(0, 65) + "..."
              : product.description}
          </p> */}
        </CardBody>
        <CardFooter className="d-flex gap-3 justify-content-between mt-4">
          <Button
            variant="primary"
            onClick={(e) => {
              viewHandler(e, product);
            }}
          >
            View
          </Button>
          <Button
            variant="secondary"
            onClick={(e) => {
              editHandler(e, product.id);
            }}
          >
            Edit
          </Button>
          <Button
            variant="danger"
            onClick={(e) => {
              deleteHandler(e, product.id);
            }}
          >
            Delete
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default ProductList;
