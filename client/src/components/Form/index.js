import React from "react";
import "./style.css";

function Form(props){
return (
  <div className="container">
  <form>
    <div className="form-group">
      <label htmlFor="search"><h2>FIND BOOKS YOU LOVE!</h2></label>
      <input
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        className="form-control "
        placeholder="Book Name / Author"
        id="search"
      />
      <button onClick={props.handleFormSubmit} className="btn btn-warning mt-3 mb-5">
        Search
        </button>
    </div>
  </form>
  </div>
);
}

export default Form;
