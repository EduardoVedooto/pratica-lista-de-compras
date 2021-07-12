import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import InsertForm from "./InsertForm";

export default function ShoppingList() {
  const [items, setItems] = useState([]);

  useEffect(loadItems, []);

  function loadItems() {
    const promise = axios.get("http://localhost:4000/items");
    promise.then(({ data }) => setItems(data));
    promise.catch(e => console.error(e));
  }

  return (
    <>
      <InsertForm onAddItem={loadItems} />
      <List>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </List>
    </>
  );
}

const List = styled.ul`
  margin-top: 40px;
  background: #fff;
  width: 600px;
  padding: 20px;
  border-radius: 10px;
  font-size: 25px;
  padding-left: 50px;
  line-height: 40px;
  list-style-type: disc;
`;
