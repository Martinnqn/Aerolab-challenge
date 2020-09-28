import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import ImageButtonCTA from "../assets/CTA-small.png";

const Product = ({ dataProduct, addToCart, removeFromCart, cantInCart }) => {
  const [showMenuAdd, setShowMenuAdd] = useState(false);
  const { photo, name, price, originalPrice, id } = dataProduct;

  const addProduct = (newCant) => {
    addToCart(id, { name: name, price: price, cant: newCant });
  };

  const removeProduct = () => {
    removeFromCart(id);
  };

  useEffect(() => {
    if (cantInCart > 0) {
      setShowMenuAdd(true);
    } else {
      setShowMenuAdd(false);
    }
  }, [cantInCart]);

  return (
    <CardProduct>
      <Img src={photo} alt={name} />
      <TitleProduct>{name}</TitleProduct>
      <Price>
        {originalPrice !== price && (
          <SpanOriginalPrice>${originalPrice}</SpanOriginalPrice>
        )}
        ${price}
      </Price>
      <Footer>
        {!showMenuAdd && (
          <AddCartButton onClick={() => addProduct(1)}>
            Agregar al carrito
          </AddCartButton>
        )}
        {showMenuAdd && (
          <MenuAddProduct
            cant={cantInCart}
            handleAddProduct={addProduct}
            handleRemoveProduct={removeProduct}
          />
        )}
      </Footer>
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

const Footer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
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

const MenuAddProduct = ({ cant, handleAddProduct, handleRemoveProduct }) => {
  return (
    <>
      <ButtonCTA onClick={() => handleRemoveProduct()}>-</ButtonCTA>
      <p>{cant}</p>
      <ButtonCTA onClick={() => handleAddProduct(cant + 1)}>+</ButtonCTA>
    </>
  );
};

const ButtonCTA = styled.button`
  background-image: url("${ImageButtonCTA}");
  background-size: cover;
  color: white;
  font-size: 13px;
  border: none;
  border-radius: 3px;
  width: 32px;
  height: 32px;
  margin-top: 16px;
  margin-bottom: 8px;
`;

export default Product;
