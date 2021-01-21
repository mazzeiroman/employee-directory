import React, { useState, useEffect } from "react";
import Container from "./components/Container";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import Alert from "./components/Alert";
import EmployeeContext from "./utils/EmployeeContext";
import API from "./utils/API";

function App() {
  const [employeeState, setEmployeeState] = useState({
    employees: [],
    searchTerm: ""
  });

  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

   useEffect(() => {

    API.searchTerms(search)
      .then(res => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setEmployeeState({
          employees: res.data.results,
          searchTerm: ""
        });
      })
      .catch(err => setError(err));
  }, [search]);

  const handleInputChange = event => {
    setSearch(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
  };
  return (
    <EmployeeContext.Provider value={employeeState}>
      <div>
        <Container style={{ minHeight: "100vh" }}>
          <h1 className="text-center">Employee Directory</h1>
          <Alert type="danger" style={{ opacity: error ? 1 : 0, marginBottom: 10 }}>
            {error}
          </Alert>
          <SearchForm
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
            results={search}
          />
          <SearchResults />
        </Container>
      </div>
    </EmployeeContext.Provider>
  );
}

export default App;

