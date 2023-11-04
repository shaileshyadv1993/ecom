import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Button,
  Nav,
  Overlay,
} from "react-bootstrap";

const ProductList = ({ product, deleteHandler, editHandler, viewHandler }) => {
  return (
    <>
      <Card
        key={product.id}
        style={{
          width: "370px",
          height: "auto",
          padding: "15px",
        }}
      >
        <CardHeader style={{ height: "200px", width: "100%" }}>
          <Card.Img
            src={product.thumbnail}
            style={{ height: "100%", width: "100%" }}
          ></Card.Img>
        </CardHeader>
        <CardBody className="h-75 w-100">
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
        <CardFooter className="d-flex gap-3 justify-content-between  mb-0 w-100">
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
