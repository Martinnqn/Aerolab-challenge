import React, { useState } from "react";
import styled from "styled-components/macro";

const Product = ({ image, title, price, originalPrice, addToCart }) => {
  return (
    <ContainerProduct>
      <Img src={image} alt={title} />
      <TitleProduct fontSize="14px">{title}</TitleProduct>
      <Paragraph family="bold" color="#0070E0">
        {45 !== price && <SpanOriginalPrice>{originalPrice}</SpanOriginalPrice>}
        {price}
      </Paragraph>
      <Paragraph>
        <AddCartButton onClick={() => addToCart}>
          Agregar al carrito
        </AddCartButton>
      </Paragraph>
    </ContainerProduct>
  );
};

const ContainerProduct = styled.div`
  background: white;
  max-width: 164px;
  max-height: 299px;
  padding: 8px;
`;

const Img = styled.img`
  max-width: 100%;
`;

const TitleProduct = styled.p`
  text-align: center;
  margin: 12px 8px;
  max-height: 40px;
  overflow: hidden;
  font-size: ${(props) => props.fontSize};
  line-height: 20px;
  color: ${(props) => props.color};
`;

const Paragraph = styled.p`
  text-align: center;
  margin: 8px;
  font-size: ${(props) => props.fontSize};
  line-height: 20px;
  justify-content: space-evenly;
  display: flex;
  color: ${(props) => props.color};
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
`;

export default Product;
