export const getGifs = async category => {
  const api = "tLq6EzpxtHBgG3aZkz5m9o415A6owQDH";
  const url = `http://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=${api}`;
  const respuesta = await fetch(url);
  const { data } = await respuesta.json();

  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      urlImg: img.images.downsized_medium.url
    };
  });

  return gifs;
};
