import React, { Component } from "react";
import Container from "../Container/index.js";
import Col from "../Col/index.js";
import Row from "../Row/index.js";
import Card from "../Card/index.js";
import Wrapper from "../Wrapper/index.js";
import SearchForm from "../SearchForm/index.js";
import API from "../../utils/API.js";

class EmployeeContainer extends Component {
  state = {
    employees: [],
    search: ""
  };

  componentDidMount() {
    API.searchTerms()
    .then(res =>
      this.setState({employees: res.data.results})
      )
      .catch(err => console.log(err));
      }
     


  searchEmployee = query => {
    API.searchTerms(query)
      .then(res => this.setState({ employees: res.data.results}))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const search = this.state.search;
    const filteredEmp = this.state.employees.filter( employeee => (employeee.name.first.includes(search)));
    this.setState({ employees: filteredEmp });
  };

  render() {
    return (
      <Wrapper>
        <Container>
            <Row>
            <Col>
              <h2>Employee Directory</h2>
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Col>
            </Row>
        
          <Row>
          <Col>
            <table className="table text-cente">
              <thead>
                <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Last Name</th>
                  <th>E-mail</th>
                  <th>Phone</th>
                  <th>City</th>
                </tr>
              </thead>
              <tbody>
                {[...this.state.employees].map((item) => (
                  <Card
                    key={item.id.value}
                    picture={item.picture}
                    firstName={item.name.first}
                    lastName={item.name.last}
                    email={item.email}
                    phone={item.phone}
                    city={item.location.city}
                  />
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
        </Container>
      </Wrapper>
    )
  }
}
export default EmployeeContainer;