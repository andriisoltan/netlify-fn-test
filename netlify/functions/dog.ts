export const handler = async () => {
  const DOG_API = "https://dog.ceo/api/breeds/image/random";

  const response = await fetch(DOG_API);
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify({
      data,
    }),
  };
};
