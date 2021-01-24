import React, { useContext } from "react";
import EmployeeContext from "../../utils/EmployeeContext";
import "./style.css";

function SearchResults() {
  const {employees, searchTerm} = useContext(EmployeeContext);
  return (
    <ul className="list-group search-results">
      <li className="list-group-item">
        <h2>{employees.name}</h2>
        <a href={searchTerm}>{searchTerm}</a>
      </li>
    </ul>
  );
}
export default SearchResults;
