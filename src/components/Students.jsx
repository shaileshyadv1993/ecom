import React, { useState } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "react-bootstrap";

const QuotesDisplay = () => {
  const [id, setId] = useState(0);
  const [quote, setQuote] = useState();
  const [author, setAuthor] = useState();

  const randomQuote = async (e) => {
    e.preventDefault();
    const { data } = await axios.get("https://dummyjson.com/quotes");
    const { quotes } = data;
    setId(Math.floor(Math.random() * quotes.length));
    // console.log(quotes[id].quote);
    // console.log(quotes[id].author);
    setQuote(quotes[id].quote);
    setAuthor(quotes[id].author);
    // console.log("Quote:", quote);
    // console.log("Quote:", author);

    // console.log(data[index]);
  };

  return (
    <>
      <Card>
        <CardHeader>
          <h1>QUOTES</h1>
        </CardHeader>
        <CardBody>
          <p>{quote}</p>
          <h4>{author}</h4>
        </CardBody>
        <CardFooter>
          <Button variant="success" onClick={randomQuote}>
            Random Quote
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default QuotesDisplay;
