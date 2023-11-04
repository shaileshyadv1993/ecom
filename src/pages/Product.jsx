import axios from "axios";
import React, { useEffect, useState } from "react";

import Loader from "../components/Loader";
import { errorToast } from "../services/toast.service";
import ProductList from "../components/ProductList";
import AddProduct from "../components/AddProduct";
import { Button, Form } from "react-bootstrap";
import ViewProduct from "../components/ViewProduct";
import EditProduct from "../components/EditProduct";
import NavbarMenu from "../components/NavbarMenu";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({
    title: "",
    thumbnail: "",
    description: "",
  });

  const URL = import.meta.env.VITE_BACKEND_URL;

  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [editShow, seteditShow] = useState(false);
  const [viewShow, setViewShow] = useState(false);
  const [viewProduct, setViewProduct] = useState([]);
  const [editProduct, setEditProduct] = useState({});
  const [originalData, setOriginalData] = useState([]);
  const [categories, setCategories] = useState([]);

  const getData = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(URL + "products");
      setProducts(data.products);
      setOriginalData(data.products);

      const categoryData = data.products.map((prod) => {
        return prod.category;
      });
      // const uniqueArray = Set(categoryData);
      setCategories(Array.from(new Set(categoryData)));

      setIsLoading(false);
    } catch (error) {
      errorToast(error.response.data);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // console.log("Data: ", categories);
  // console.log("Typeof: ", typeof categories);

  const deleteHandler = (e, id) => {
    e.preventDefault();
    const filteredProds = products.filter((prod) => {
      return prod.id !== id;
    });
    setProducts(filteredProds);
  };

  // Add product
  function addProduct(e) {
    e.preventDefault();
    // Method-1
    // products.unshift(product);
    // console.log("Products:", products);

    // Method-2
    products.unshift(product);
    setProducts([...products]);

    // Method 3
    // setProducts([...products, product]);
    setShow(false);
  }

  // Handle show
  const showProduct = (e) => {
    e.preventDefault();
    setShow(true);
    // console.log("Clicked");
  };

  // Handle change
  const handleChange = (e) => {
    setProduct((prev) => {
      return { ...prev, [e.target.name]: e.target.value, id: Date.now() };
    });

    // setProduct({
    //   ...product,
    //   [e.target.name]: e.target.value,
    // });
    // console.log(product);
  };

  // Handle close
  function handleClose() {
    setShow(false);
  }

  // Handle view close
  function handleCloseView() {
    setViewShow(false);
  }
  // Handle edit close
  function handleCloseEdit() {
    seteditShow(false);
  }

  // Edit Handle
  const editHandle = (e, id) => {
    seteditShow(true);
    e.preventDefault();
    const editProduct = products.find((product) => product.id === id);
    // const editProduct = products.filter((prod) => {
    //   return prod.id === id;
    setEditProduct(editProduct);
  };

  // Edit Handle change
  const handleEditChange = (e) => {
    setEditProduct((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  // save edit product
  function editSave(e) {
    e.preventDefault();
    const editedProduct = products.map((prod) => {
      // if (prod.id === editProduct.id) {
      //   return {
      //     ...prod,
      //     title: editProduct.title,
      //     description: editProduct.description,
      //   };
      // } else {
      //   return prod;
      // }
      // Method 2
      return prod.id === editProduct.id ? editProduct : prod;
    });
    setProducts(editedProduct);
    seteditShow(false);
  }

  // View Handle
  const viewHandle = (e, product) => {
    e.preventDefault();
    setViewShow(true);
    setViewProduct(product);
  };

  // Product search handle

  const searchHandle = (e) => {
    e.preventDefault();
    console.log(e.target.value.toLowerCase());
    const searchedProduct = originalData.filter((prod) => {
      return prod.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    // console.log(e.target.value.toLowerCase());

    console.log("Searched:", searchedProduct);
    setProducts(searchedProduct);
  };
  // console.log(products);

  // Filter data
  function filterData(data) {
    console.log(data);
    if (data === "") {
      setProducts(originalData);
    } else {
      const filteredProd = originalData.filter((prod) => {
        return prod.category === data;
      });
      setProducts(filteredProd);
    }
  }
  return (
    <>
      <NavbarMenu searchProduct={searchHandle} />
      <h1>Product</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="d-flex justify-content-between mb-5">
            <Button variant="info" onClick={showProduct}>
              Add Product
            </Button>
            <Form.Select
              size="sm"
              style={{ width: "200px" }}
              onChange={(e) => filterData(e.target.value)}
            >
              <option value="">Filter by category</option>
              {categories.map((category, index) => {
                return (
                  <option key={index} value={category}>
                    {category}
                  </option>
                );
              })}
            </Form.Select>
          </div>
          <div className="d-flex flex-wrap justify-content-even gap-3">
            {products.map((prod) => {
              return (
                <ProductList
                  key={prod.id}
                  product={prod}
                  deleteHandler={deleteHandler}
                  editHandler={editHandle}
                  viewHandler={viewHandle}
                />
              );
            })}
          </div>
        </>
      )}
      <AddProduct
        show={show}
        handleClose={handleClose}
        addProductHandler={addProduct}
        handleChange={handleChange}
      />
      <ViewProduct
        show={viewShow}
        handleClose={handleCloseView}
        handleChange={handleChange}
        product={viewProduct}
      />
      <EditProduct
        show={editShow}
        handleClose={handleCloseEdit}
        handleEditChange={handleEditChange}
        product={editProduct}
        editSave={editSave}
      />
      ;
    </>
  );
};

export default Product;
