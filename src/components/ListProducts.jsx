import React, { useState } from "react";
import styled from "styled-components/macro";
import Product from "./Product";

const ListProducts = ({ listProducts }) => {
  return (
    <ContainerProducts>
      {listProducts.map((element) => {
        return (
          <Product
            key={element.id}
            id={element.id}
            image={element.photo}
            title={element.name}
            price={element.price}
            originalPrice={element.originalPrice}
          />
        );
      })}
    </ContainerProducts>
  );
};

const ContainerProducts = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  background: gray;
  justify-content: center;
  grid-gap: 10px;
`;

export default ListProducts;
