import { getGifs } from "../../helpers/getGifs";

describe("prueba con getGifs Fetch", () => {
  test("debe traer 10 elementos", async () => {
    const gifs = await getGifs("Morty");
    expect(gifs.length).toBe(10)
  });
});
