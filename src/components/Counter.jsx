import { React, useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "react-bootstrap";

import NavBarCommon from "./NavBarCommon";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);

  // COmponent first render/every render
  // useEffect(() => {
  //   console.log("For every page render/load");
  // });

  // Dependency array
  // useEffect(() => {
  //   console.log("Render at first page render/load (for API)");
  // }, []);

  // Specific sate change
  useEffect(() => {
    console.log("Render at specific state change");
  }, [count]);

  const increment = (e) => {
    e.preventDefault();
    if (count === 10) {
      alert("Counter can not go above 10");
    } else {
      setCount(count + 1);
    }
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setTime(time + 1);
  //   }, 1000);
  // });

  const decrement = (e) => {
    e.preventDefault();
    if (count == 0) {
      alert("Counter can not go below zero");
    } else {
      setCount(count - 1);
    }
  };

  const reset = (e) => {
    e.preventDefault();
    setCount(0);
  };

  return (
    <>
      <NavBarCommon />
      <Card>
        <CardHeader>
          <h1>Couner</h1>
        </CardHeader>
        <CardBody>
          <h2> {count}</h2>
          <h3>Time: {time} sec</h3>
        </CardBody>
        <CardFooter className="d-flex gap-3">
          <Button variant="success" onClick={increment}>
            Increment
          </Button>
          <Button variant="warning" onClick={decrement}>
            Decrement
          </Button>
          <Button variant="danger" onClick={reset}>
            Reset
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default Counter;
