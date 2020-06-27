import React, { Fragment } from "react";

const GifGridItem = ({ image }) => {
  const { title, urlImg } = image;

  return (
    <Fragment>
      <div className="card animate__animated animate__zoomIn">
        <img src={urlImg} alt={title} />
        <p>{title}</p>
      </div>
    </Fragment>
  );
};

export default GifGridItem;
