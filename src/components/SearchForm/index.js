import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="search"
          type="text"
          className="form-control"
          placeholder="Type in a name to search"
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-success">
          Search 
        </button>
      </div>
     </form>
  );
}

export default SearchForm;
