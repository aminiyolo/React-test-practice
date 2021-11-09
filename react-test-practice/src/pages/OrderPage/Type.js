import React, { useEffect, useState, useContext } from "react";
import Products from "./Products";
import axios from "axios";
import ErrorBanner from "../../components/ErrorBanner";
import Options from "./Options";
import { OrderContext } from "../../contexts/OrderContext";

const Type = ({ orderType }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  const [orderDatas, updateItemCount] = useContext(OrderContext);
  console.log(orderDatas);

  const loadItems = async (orderType) => {
    try {
      const res = await axios.get(`http://localhost:5000/${orderType}`);
      setItems(res.data);
    } catch (err) {
      setError(true);
    }
  };

  useEffect(() => {
    loadItems(orderType);
  }, [orderType]);

  if (error) {
    return <ErrorBanner msg="에러가 발생했습니다." />;
  }

  const ItemComponents = orderType === "products" ? Products : Options;

  const optionItems = items.map((item) => (
    <ItemComponents
      key={item.name}
      name={item.name}
      imagePath={""}
      updateItemCount={(itemName, newItemCount) =>
        updateItemCount(itemName, newItemCount, orderType)
      }
    />
  ));

  return (
    <>
      <h2>주문 종류</h2>
      <p>하나의 가격</p>
      <p>총 가격: {orderDatas.totals[orderType]}</p>

      <div
        style={{
          display: "flex",
          flexDirection: orderType === "options" && "column",
        }}
      >
        {optionItems}
      </div>
    </>
  );
};

export default Type;
