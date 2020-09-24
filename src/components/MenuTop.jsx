import React, { useState } from "react";
import logo from "../assets/Combined Shape 2.png";
import cart from "../assets/shopping-cart.png";
import styled from "styled-components/macro";

const MenuTop = ({ totalPrice, cantProducts }) => {
  return (
    <ContainerMenu>
      <ul>
        <li>
          <img src={logo} />
        </li>
        <li>
          <span>EzShop</span>
        </li>
      </ul>
      <ul>
        <li>{totalPrice}</li>
        <li>
          <img src={cart} />
        </li>
        <li>
          <SpanCantProducts>
            <small>{cantProducts}</small>
          </SpanCantProducts>
        </li>
      </ul>
    </ContainerMenu>
  );
};

const ContainerMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  color: #006de3;
  height: 62px;

  ul {
    display: flex;
    align-items: center;
  }
  ul li {
    margin-right: 5px;
    list-style: none;
  }
`;

const SpanCantProducts = styled.span`
  vertical-align: 80%;
  margin-left: -10px;
  background: #0070e0;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  color: white;
  text-align: center;
  display: inline-block;
`;

export default MenuTop;
