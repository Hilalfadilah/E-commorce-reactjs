import axios from "axios";

export const getProducts = async (callback) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getProductsCategory = async (callback) => {
  axios
    .get("https://fakestoreapi.com/products/categories")
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
