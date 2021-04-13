import { hostname } from "./config";

export const getBanner = () => {
  return fetch(`${hostname}/banners`, { method: "GET" })
    .then((response) => response.json())
    .catch((error) => {
      console.error("There was an error!", error);
    });
};

export const getProduct = () => {
  return fetch(`${hostname}/products`, { method: "GET" })
    .then((response) => response.json())
    .catch((error) => {
      console.error("There was an error!", error);
    });
};

export const getCart = () => {
  return fetch(`${hostname}/cart/1`, { method: "GET" })
    .then((response) => response.json())
    .catch((error) => {
      console.error("There was an error!", error);
    });
};

export const updateCart = (data) => {
  return fetch(`${hostname}/cart/1`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("There was an error!", error);
    });
};
