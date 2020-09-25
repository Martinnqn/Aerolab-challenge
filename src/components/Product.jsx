import React, { useState } from "react";
import styled from "styled-components/macro";

const Product = ({ image, title, price, originalPrice, addToCart }) => {
  return (
    <ContainerProduct>
      <Img src={image} alt={title} />
      <TitleProduct fontSize="14px">{title}</TitleProduct>
      <Price>
        {originalPrice !== price && (
          <SpanOriginalPrice>{originalPrice}</SpanOriginalPrice>
        )}
        {price}
      </Price>
      <AddCartButton onClick={() => addToCart}>
        Agregar al carrito
      </AddCartButton>
    </ContainerProduct>
  );
};

const ContainerProduct = styled.div`
  text-align: center;
  background: white;
  max-width: 148px;
  max-height: 299px;
  padding: 8px;
`;

const Img = styled.img`
  max-width: 100%;
`;

const TitleProduct = styled.p`
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  margin-top: 8px;
  margin-bottom: 8px;
`;

const Price = styled.p`
  font-size: 16px;
  line-height: 19px;
  justify-content: space-evenly;
  display: flex;
  color: #0070e0;
  margin: auto;
  family: "bold";
`;

const SpanOriginalPrice = styled.span`
  text-align: right;
  margin-right: 3px;
  vertical-align: text-bottom;
  color: black;
  font-size: 12px;
  text-decoration: line-through;
`;

const AddCartButton = styled.button`
  color: #0070e0;
  font-size: 13px;
  border: 1px solid #0070e0;
  border-radius: 3px;
  background: white;
  width: 132px;
  height: 32px;
  margin-top: 16px;
  margin-bottom: 8px;
`;

export default Product;
