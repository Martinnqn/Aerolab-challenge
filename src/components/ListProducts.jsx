import React, { useState } from "react";
import styled from "styled-components/macro";
import Product, { PlaceHolderProduct } from "./Product";
import useInfiniteScroll from "react-infinite-scroll-hook";
import _ from "lodash";

const URL_API = "https://challenge-api.aerolab.co/products";

/**
 * Show a product list using the Products endpoint
 * @param {*} param0
 */
const ProductsList = ({ userProducts, setUserProducts }) => {
  const [page, setPage] = useState(1);
  const [cantPage, setCantPage] = useState(2);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  /**
   * Adds product to user cart. Also saves serialized cart in localstorage.
   * @param {*} id
   * @param {*} dataProduct
   */
  function addUserProduct(id, dataProduct) {
    setUserProducts(new Map(userProducts.set(id, dataProduct)));
    window.localStorage.setItem(
      "userCart",
      JSON.stringify(Array.from(userProducts.entries()))
    );
  }

  /**
   * Removes product from user cart. Also updates cart in localstorage.
   * @param {*} id
   */
  function removeUserProduct(id) {
    let data = userProducts.get(id);
    if (data !== undefined) {
      if (data.cant > 1) {
        data.cant = data.cant - 1;
        setUserProducts(new Map(userProducts.set(id, data)));
      } else {
        userProducts.delete(id);
        setUserProducts(new Map(userProducts));
      }
      window.localStorage.setItem(
        "userCart",
        JSON.stringify(Array.from(userProducts.entries()))
      );
    }
  }

  /**Request Product endpoint and updates products list*/
  const fetchMoreData = () => {
    setLoading(true);
    fetch(`${URL_API}?page=${page}`)
      .then((res) => res.json())
      .then((res) => {
        setPage(page + 1);
        setLoading(false);
        if (res.page_count) {
          setCantPage(res.page_count);
        }
        setProducts([...products, ...res.products]);
      });
  };

  const infiniteRef = useInfiniteScroll({
    loading,
    hasNextPage: page <= cantPage,
    onLoadMore: fetchMoreData,
    scrollContainer: "window",
  });

  return (
    <ContainerProducts>
      <p>
        <TitleContainer>Almacén</TitleContainer>
      </p>
      <ContainerListProducts ref={infiniteRef}>
        {loading && _.times(6, (i) => <PlaceHolderProduct key={i} />)}
        {products.map((element) => {
          return (
            <Product
              key={element.id}
              addToCart={addUserProduct}
              removeFromCart={removeUserProduct}
              dataProduct={element}
              cantInCart={userProducts.get(element.id)?.cant || 0}
            />
          );
        })}
      </ContainerListProducts>
      {loading && (
        <h4 style={{ textAlign: "center" }}>Cargando productos...</h4>
      )}
    </ContainerProducts>
  );
};

const ContainerListProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
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

export default ProductsList;
