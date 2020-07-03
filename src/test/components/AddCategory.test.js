import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import AddCategory from "../../components/AddCategory";

const setCategories = jest.fn();
let wrapper = shallow(<AddCategory setCategories={setCategories} />);

beforeEach(() => {
  jest.clearAllMocks();
  wrapper = shallow(<AddCategory setCategories={setCategories} />);
});

describe("prueba de <AddCategory />", () => {
  test("mostrar el componente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe cambiar el texto", () => {
    const input = wrapper.find("input");
    const value = "Hola mundo";
    input.simulate("change", {
      target: {
        value: value
      }
    });
  });

  test("no debe de postear la información con submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test("debe llamare el setCategories y limpiar la caja de texto", () => {
    const value = "Hola mundo";

    // simular el inputChange
    wrapper.find("input").simulate("change", {
      target: {
        value: value
      }
    });

    // simular el submit
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    // setCategories se debe haber llamado
    expect(setCategories).toHaveBeenCalled();

    // el valor del input debe estar en ''
    expect( wrapper.find('input').prop('value')).toBe('')
  });
});
