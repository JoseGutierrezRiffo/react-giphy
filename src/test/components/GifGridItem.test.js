import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import GifGridItem from "../../components/GifGridItem";

const title = "Titulo de prueba";
const urlImg = "http://localhost/logo.png";


describe("prueba de <GitGridItem />", () => {
  test("debe mostrar el componente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrar un parrafo con el titulo", () => {
    const parrafo = wrapper.find("p");
    expect(parrafo.text()).toBe(title);
  });

  test("debe mostrar la imagen con url y un alt de las propiedades", () => {
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(urlImg);
    expect(img.prop("alt")).toBe(title);
  });

  test("debe tener el className card animate__animated animate__zoomIn", () => {
    const className = wrapper.find("div")
    expect(className.prop("className")).toBe("card animate__animated animate__zoomIn")
  });
});
