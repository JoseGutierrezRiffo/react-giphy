import React from "react";
import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";


describe("prueba con <GifExpertApp />", () => {
  test("debe mostrar el componente", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrar una lista con las categorias", () => {
    const categories = ['Morty', 'Rick', 'Homer']
    const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length)

  });
});
