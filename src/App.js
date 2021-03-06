import React, { useState, useEffect } from "react";
import MenuTop from "./components/MenuTop";
import ListProducts from "./components/ListProducts";
import styled, { ThemeProvider } from "styled-components/macro";
import theme, { Fonts } from "./themes/Theme";
import SWNotification from "./components/ServiceNotification";

function App() {
  const [userProducts, setUserProducts] = useState(new Map());

  /**Load users products cart if exists in storage. */
  useEffect(() => {
    if (window.localStorage.getItem("userCart")) {
      setUserProducts(
        new Map(JSON.parse(window.localStorage.getItem("userCart")))
      );
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Fonts />
      <ContainerApp>
        <SWNotification />
        <MenuTop userProducts={userProducts} />
        <ListProducts
          userProducts={userProducts}
          setUserProducts={setUserProducts}
        />
      </ContainerApp>
    </ThemeProvider>
  );
}

const ContainerApp = styled.div`
  height: 100vh;
  width: 100%;
  font-family: SFProText;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`;

export default App;
