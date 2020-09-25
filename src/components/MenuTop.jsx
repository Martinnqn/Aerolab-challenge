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
  justify-content: space-around;
  background: white;
  color: #006de3;
  height: 62px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.04),
    inset 0 -1px 0 0 rgba(0, 0, 0, 0.12);
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
