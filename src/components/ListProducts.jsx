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
  background: #d0d0d0;
  justify-content: center;
`;

export default ListProducts;
