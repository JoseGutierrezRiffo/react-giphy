import React, { Fragment } from "react";
import GifGridItem from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {
  const { data:images, loading } = useFetchGifs(category);

  return (
    <Fragment>
      <h3>{category}</h3>
      {loading && <p>Cargando...</p>}
      <div className="card-grid">
        {images.map(image => (
          <GifGridItem key={image.id} image={image} />
        ))}
      </div>
    </Fragment>
  );
};

export default GifGrid;
