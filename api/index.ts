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
  const page = req.query.page != undefined ? req.query.page : "1";
  const dataAerolab = await getDataFromAerolab(page);
  const filterProducts = getUpdatedProducts(dataAerolab.products);
  const extendedProducts = extendsModel(dollar, filterProducts);
  dataAerolab.products = extendedProducts;
  dataAerolab.per_page = extendedProducts.length;
  res.statusCode = 200;
  res.json({ ...dataAerolab });
};

/**
 * Return json data from Aerolab api.
 * @param {*} page
 */
async function getDataFromAerolab(page) {
  let products;
  const res = await fetch(`${URL_PRODUCTS}?page=${page}`);
  products = await res.json();
  return products;
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
