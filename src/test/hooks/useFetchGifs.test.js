import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("prueba con el hook useFetchGifs", () => {
  test("debe retornar el estado inicial", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("Morty"));
    const { data, loading } = result.current;
    await waitForNextUpdate();
    console.log(data, loading);
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test("debe retornar un arreglo de imagenes y el loading en false", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("Morty")
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;
    console.log(data, loading);
    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});
