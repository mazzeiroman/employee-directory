import React from "react";

const EmployeeContext = React.createContext({
  employees: [],
  searchTerm: ""
});

export default EmployeeContext;