import React, { useState } from "react";
import styled from "styled-components/macro";
import Product from "./Product";

const ListProducts = ({ listProducts, addToCart }) => {
  return (
    <ContainerProducts>
      <p>
        <TitleContainer>Almacén</TitleContainer>
      </p>
      <ContainerListProducts>
        {listProducts.map((element) => {
          return (
            <Product
              key={element.id}
              addToCart={addToCart}
              dataProduct={element}
            />
          );
        })}
      </ContainerListProducts>
    </ContainerProducts>
  );
};

const ContainerListProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (min-width: 414px) {
    justify-content: space-evenly;
  }
`;

const ContainerProducts = styled.div`
  padding: 10px;
  max-width: 970px;
  margin: auto;
  background: #d0d0d0;
`;

const TitleContainer = styled.span`
  font-family: HelveticaNeue-Medium;
  font-size: 24px;
`;
export default ListProducts;
