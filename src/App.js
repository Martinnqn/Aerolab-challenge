import React, { useState } from "react";
import logo from "./logo.svg";
import MenuTop from "./components/MenuTop";
import styled from "styled-components/macro";

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [listProduct, setListProduct] = useState([]);

  return (
    <ContainerApp>
      <MenuTop totalPrice={totalPrice} cantProducts={listProduct.length} />
    </ContainerApp>
  );
}

const ContainerApp = styled.div`
  background: gray;
  height: 100vh;
  width: 100vw;
`;

export default App;
