import fetch from "isomorphic-unfetch";
import { DateTime } from "luxon";

const URL_DOLLAR_PRICE = "https://challenge-api.aerolab.co/dollar";
const URL_PRODUCTS = "https://challenge-api.aerolab.co/products";

/**
 * API endpoint for extend Aerolab API with dollar prices
 */
export default async (req, res) => {
  const dolarData = await fetch(URL_DOLLAR_PRICE);
  const data = await dolarData.json();
  const dollar = data.rate;
  const page = req?.query?.page ?? "1";
  const products = await getProducts(page);
  const filterProducts = getUpdatedProducts(products);
  const extendedProducts = extendsModel(dollar, filterProducts);
  res.statusCode = 200;
  res.json({ extendedProducts });
};

/**
 * Return products list from Aerolab api.
 * @param {*} page
 */
async function getProducts(page) {
  let products;
  const res = await fetch(`${URL_PRODUCTS}?page=${page}`);
  products = await res.json();
  return products.products;
}

/**
 * Adds dollar prices to products.
 * @param {*} dollar
 * @param {*} products
 */
function extendsModel(dollar, products) {
  let ExtendedProducts = products.map((prod) => {
    prod.dollarPrice = prod.price / dollar;
    prod.dollarOriginalPrice = prod.originalPrice / dollar;
    return prod;
  });
  return ExtendedProducts;
}

/**
 * Returns products list with products that were updated less than a month ago
 * @param {} products
 */
function getUpdatedProducts(products) {
  let filteredProducts = products.filter((prod) => {
    let lastUpdate = DateTime.fromISO(prod.updatedAt);
    let current = DateTime.local();
    let diffInMonths = current.diff(lastUpdate, "months");
    return diffInMonths.values.months < 1;
  });
  return filteredProducts;
}
