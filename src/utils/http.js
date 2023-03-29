const BASE_URL = "https://fakestoreapi.com/products/";

export const GET = async (endpoint) => {
  const res = await fetch(BASE_URL + endpoint);
  const data = await res.json();

  return data;
};
