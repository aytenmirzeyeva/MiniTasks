import React from "react";
import { products } from "../assets/data";
import Card from "../components/Card";
const Home = () => {
  return (
    <div className="container">
      <h1>Items</h1>
      <div className="app">
        {products.map((item) => {
          return (
            <Card
              key={item.id}
              title={item.title.slice(0, 18)}
              image={item.image}
              description={item.description.slice(0, 30)}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
