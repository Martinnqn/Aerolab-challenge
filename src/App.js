import React, { useState } from "react";
import logo from "./logo.svg";
import MenuTop from "./components/MenuTop";
import ListProducts from "./components/ListProducts";
import styled from "styled-components/macro";

const URL_API = "https://challenge-api.aerolab.co/";

const products = [
  {
    id: "7790040929906",
    name: "Galletitas Chocolate Chocolinas",
    price: 55,
    presentation: "170 gr",
    brand: "Chocolinas",
    photo: "https://challenge-api.aerolab.co/static/products/7790040929906.jpg",
    originalPrice: 55,
    updatedAt: "2020-08-30T00:44:33+00:00",
  },
  {
    id: "7613035067837",
    name: "Cafe Instantaneo Suave NesCafe Dolca",
    price: 269.9,
    presentation: "170 gr",
    brand: "Nescafé",
    photo: "https://challenge-api.aerolab.co/static/products/7613035067837.jpg",
    originalPrice: 269.9,
    updatedAt: "2020-09-05T00:44:33+00:00",
  },
  {
    id: "7790040932708",
    name: "Galletitas de Vainilla Sabor Frutilla Merengadas",
    price: 44,
    presentation: "93 gr",
    brand: "Merengadas",
    photo: "https://challenge-api.aerolab.co/static/products/7790040932708.jpg",
    originalPrice: 44,
    updatedAt: "2020-09-14T00:44:33+00:00",
  },
  {
    id: "7794000597723",
    name: "Caldo de Verduras Wilde",
    price: 45.9,
    presentation: "12 un",
    brand: "Wilde",
    photo: "https://challenge-api.aerolab.co/static/products/7794000597723.jpg",
    originalPrice: 45.9,
    updatedAt: "2020-08-25T00:44:33+00:00",
  },
  {
    id: "7794000960145",
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
  const [totalPrice, setTotalPrice] = useState(0);
  const [listProducts, setListProduct] = useState(products);

  return (
    <ContainerApp>
      <MenuTop totalPrice={totalPrice} cantProducts={listProducts.length} />
      <ListProducts listProducts={listProducts} />
    </ContainerApp>
  );
}

const ContainerApp = styled.div`
  height: 100vh;
  width: 100vw;
`;

export default App;
