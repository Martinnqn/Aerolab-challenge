import fetch from "isomorphic-unfetch";

const URL_DOLLAR_PRICE = "https://challenge-api.aerolab.co/dollar";
const URL_PRODUCTS = "https://challenge-api.aerolab.co/products";

export default async (req, res) => {
  const dolarData = await fetch(URL_DOLLAR_PRICE);
  const data = await dolarData.json();
  const dollar = data.rate;
  const page = req?.query?.page ?? "1";
  const products = await getProducts(page);
  extendsModel(dollar, products);
  res.statusCode = 200;
  res.json({ products });
};

async function getProducts(page) {
  let products;
  const res = await fetch(`${URL_PRODUCTS}?page=${page}`);
  products = await res.json();
  return products.products;
}

function extendsModel(dollar, products) {
  products.map((prod) => {
    if (true) {
      prod.dollarPrice = prod.price / dollar;
      prod.dollarOriginalPrice = prod.originalPrice / dollar;
    }
  });
}
