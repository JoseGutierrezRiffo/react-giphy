import React from "react";
import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

const categoria = "Morty";

describe("prueba con <GifGrid />", () => {
  test("debe mostrar el componente", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    });
    const wrapper = shallow(<GifGrid category={categoria} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrar items cuando se cargan ls imagenes useFetchGifs", () => {
    const gifs = [
      {
        id: "JqA8xufDs9ojSo9Cfjy7Zn",
        title: "titulo de la imagen 1",
        urlImg: "http://localhost/imagen1.png"
      },
      {
        id: "KqA8xufDs9ojSo9Cfjy7Zn",
        title: "titulo de la imagen 2",
        urlImg: "http://localhost/imagen2.png"
      },
      {
        id: "LqA8xufDs9ojSo9Cfjy7Zn",
        title: "titulo de la imagen 3",
        urlImg: "http://localhost/imagen3.png"
      }
    ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });
    const wrapper = shallow(<GifGrid category={categoria} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
