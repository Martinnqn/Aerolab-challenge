import fetch from "isomorphic-unfetch";

const URL_CATEGORY = "https://challenge-api.aerolab.co/categories";

/**
 * API endpoint for make category tree from categories in URL_CATEGORY
 */
export default async (req, res) => {
  /*const categoryData = await fetch(URL_CATEGORY);
  const categories = await categoryData.json().categories;*/
  const categories_tree = getTree(CAT);
  res.statusCode = 200;
  res.json({ categories: categories_tree });
};

function getTree(categories) {
  let tree = [];
  categories.forEach((node) => {
    if (node.parent_id === null) {
      node.subcategories = getSubCategories(node.id, categories);
      tree.push(node);
    }
  });
  return tree;
}

function getSubCategories(parentId, categories) {
  let subCategories = [];
  categories.forEach((node) => {
    if (node.parent_id === parentId) {
      node.subcategories = getSubCategories(node.id, categories);
      subCategories.push(node);
    }
  });
  return subCategories;
}

const CAT = [
  { id: 1, name: "Refrigerados", parent_id: null },
  { id: 2, name: "Lácteos", parent_id: 1 },
  { id: 3, name: "Bebidas", parent_id: null },
  { id: 4, name: "Quesos y Fiambres", parent_id: 1 },
  { id: 5, name: "Lácteos", parent_id: 1 },
  { id: 6, name: "Frutas y Verduras", parent_id: null },
  { id: 7, name: "Panadería", parent_id: null },
  { id: 8, name: "Carnes y Pescados", parent_id: null },
  { id: 9, name: "Carnes", parent_id: 8 },
  { id: 10, name: "Carne de Mamíferos", parent_id: 9 },
  { id: 11, name: "Carne de Felinos", parent_id: 10 },
  { id: 12, name: "Gatitos", parent_id: 11 },
  { id: 13, name: "Gatitos de memes", parent_id: 12 },
  { id: 14, name: "Keyboard Cat", parent_id: 13 },
  { id: 15, name: "Medio que me estoy quedando sin ideas", parent_id: 14 },
  {
    id: 16,
    name:
      "Si estás haciendo esto con un montón de for loops creo que deberías encontrarle una vuelta",
    parent_id: 15,
  },
  { id: 17, name: "Te tiro una pista:", parent_id: 16 },
  {
    id: 18,
    name: "Para entender recursión, primero tenés que entender recursión",
    parent_id: 17,
  },
  { id: 19, name: "Eso nomás", parent_id: 18 },
  { id: 20, name: "Pescados", parent_id: 8 },
  { id: 21, name: "Gaseosas", parent_id: 3 },
  { id: 22, name: "Pan Blanco", parent_id: 7 },
  { id: 23, name: "Pan Hipster", parent_id: 7 },
];
