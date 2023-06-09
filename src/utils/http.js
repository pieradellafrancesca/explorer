const BASE_URL = "https://failteireland.azure-api.net/opendata-api/v1/";

export const GET = async (endpoint) => {
  const res = await fetch(BASE_URL + endpoint);
  const data = await res.json();

  return data;
};
