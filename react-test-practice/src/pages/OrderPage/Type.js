import React, { useEffect, useState } from "react";
import Products from "./Products";
import axios from "axios";

const Type = ({ orderType }) => {
  const [items, setItems] = useState([]);

  const loadItems = async (orderType) => {
    try {
      const res = await axios.get(`http://localhost:5000/${orderType}`);
      setItems(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadItems(orderType);
  }, [orderType]);

  const ItemComponents = orderType === "products" ? Products : null;

  const optionItems = items.map((item) => (
    <ItemComponents
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return <div>{optionItems}</div>;
};

export default Type;
