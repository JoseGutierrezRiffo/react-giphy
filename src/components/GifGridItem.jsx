import React, { Fragment } from "react";
import PropTypes from "prop-types";

const GifGridItem = ({ title, urlImg }) => {
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

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  urlImg: PropTypes.string.isRequired
};
