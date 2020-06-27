export const getGifs = async category => {
  const api = "xXk77yjhK3ZWc1xUY1CydaWXjcCu46Gw";
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
