import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handlerSubmit = e => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories(category => [ inputValue, ...category ]);
      setInputValue("");
    }
  };

  return (
    <Fragment>
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
      </form>
    </Fragment>
  );
};

export default AddCategory;

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
};
