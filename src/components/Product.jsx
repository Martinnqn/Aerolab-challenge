import React, { useState } from "react";
import styled from "styled-components/macro";

const Product = ({ image, title, price, originalPrice, addToCart }) => {
  return (
    <CardProduct>
      <Img src={image} alt={title} />
      <TitleProduct>{title}</TitleProduct>
      <Price>
        {originalPrice !== price && (
          <SpanOriginalPrice>{originalPrice}</SpanOriginalPrice>
        )}
        {price}
      </Price>
      <AddCartButton onClick={() => addToCart}>
        Agregar al carrito
      </AddCartButton>
    </CardProduct>
  );
};

const CardProduct = styled.div`
  text-align: center;
  background: white;
  max-width: 148px;
  max-height: 299px;
  padding: 8px;
  border-radius: 3px;
  margin-bottom: 16px;
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
  font-size: 14px;
  margin-top: 8px;
  margin-bottom: 8px;
`;

const Price = styled.p`
  font-size: 16px;
  line-height: 19px;
  justify-content: space-evenly;
  display: flex;
  color: ${(props) => props.theme.primary};
  margin: auto;
  font-weight: bold;
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
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 3px;
  background: white;
  width: 132px;
  height: 32px;
  margin-top: 16px;
  margin-bottom: 8px;
  &:active {
    color: white;
    background: ${(props) => props.theme.primary};
  }
  &:hover {
    cursor: pointer;
  }
`;

export default Product;
