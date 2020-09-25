import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import MenuTop from "./components/MenuTop";
import ListProducts from "./components/ListProducts";
import styled, { ThemeProvider } from "styled-components/macro";
import ThemeContext from "./contexts/ThemeContext";
import theme, { Fonts } from "./themes/Theme";

const URL_API = "https://challenge-api.aerolab.co/";

const products = [
  {
    id: "779004092119906",
    name: "Galletitas Chocolate Chocolinas",
    price: 55,
    presentation: "170 gr",
    brand: "Chocolinas",
    photo: "https://challenge-api.aerolab.co/static/products/7790040929906.jpg",
    originalPrice: 55,
    updatedAt: "2020-08-30T00:44:33+00:00",
  },
  {
    id: "76130350627837",
    name: "Cafe Instantaneo Suave NesCafe Dolca",
    price: 269.9,
    presentation: "170 gr",
    brand: "Nescafé",
    photo: "https://challenge-api.aerolab.co/static/products/7613035067837.jpg",
    originalPrice: 269.9,
    updatedAt: "2020-09-05T00:44:33+00:00",
  },
  {
    id: "779004120932708",
    name: "Galletitas de Vainilla Sabor Frutilla Merengadas",
    price: 44,
    presentation: "93 gr",
    brand: "Merengadas",
    photo: "https://challenge-api.aerolab.co/static/products/7790040932708.jpg",
    originalPrice: 44,
    updatedAt: "2020-09-14T00:44:33+00:00",
  },
  {
    id: "779400055597723",
    name: "Caldo de Verduras Wilde",
    price: 45.9,
    presentation: "12 un",
    brand: "Wilde",
    photo: "https://challenge-api.aerolab.co/static/products/7794000597723.jpg",
    originalPrice: 45.9,
    updatedAt: "2020-08-25T00:44:33+00:00",
  },
  {
    id: "77940005960145",
    name: "Mayonesa Light Doypack Hellmanns",
    price: 55.9,
    presentation: "237 gr",
    brand: "Hellmann's",
    photo: "https://challenge-api.aerolab.co/static/products/7794000960145.jpg",
    originalPrice: 55.9,
    updatedAt: "2020-08-25T00:44:33+00:00",
  },
  {
    id: "77940009260145",
    name: "Mayonesa Light Doypack Hellmanns",
    price: 55.9,
    presentation: "237 gr",
    brand: "Hellmann's",
    photo: "https://challenge-api.aerolab.co/static/products/7794000960145.jpg",
    originalPrice: 55.9,
    updatedAt: "2020-08-25T00:44:33+00:00",
  },
  {
    id: "7794000960t145",
    name: "Mayonesa Light Doypack Hellmanns",
    price: 55.9,
    presentation: "237 gr",
    brand: "Hellmann's",
    photo: "https://challenge-api.aerolab.co/static/products/7794000960145.jpg",
    originalPrice: 55.9,
    updatedAt: "2020-08-25T00:44:33+00:00",
  },
  {
    id: "77940009601d45",
    name: "Mayonesa Light Doypack Hellmanns",
    price: 55.9,
    presentation: "237 gr",
    brand: "Hellmann's",
    photo: "https://challenge-api.aerolab.co/static/products/7794000960145.jpg",
    originalPrice: 55.9,
    updatedAt: "2020-08-25T00:44:33+00:00",
  },
];

function App() {
  const [listProducts, setListProduct] = useState(new Map());

  function addProduct(id, dataProduct) {
    let data = listProducts.get(id);
    if (data === undefined) {
      setListProduct(new Map(listProducts.set(id, dataProduct)));
    } else {
      data.cant = data.cant + 1;
      setListProduct(new Map(listProducts.set(id, data)));
    }
  }

  function removeProduct(id) {
    let data = listProducts.get(id);
    if (data !== undefined) {
      if (data.cant > 1) {
        data.cant = data.cant - 1;
        setListProduct(new Map(listProducts.set(id, data)));
      } else {
        setListProduct(new Map(listProducts.remove(id)));
      }
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Fonts />
      <ContainerApp>
        <MenuTop listProducts={listProducts} />
        <ListProducts
          listProducts={products}
          addToCart={addProduct}
          removeProduct={removeProduct}
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
