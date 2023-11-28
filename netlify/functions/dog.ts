export const handler = async () => {
  const DOG_API = "https://dog.ceo/api/breeds/image/random";

  const response = await fetch(DOG_API);
  const data = await response.json();

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, POST, OPTION",
    },
    body: JSON.stringify({
      data,
    }),
  };
};
