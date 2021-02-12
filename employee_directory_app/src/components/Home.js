import React, { Component } from "react";
import { API } from "../utils/API";
import { TableRow } from "../components/TableRow/index";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      search: "",
      filteredResult: [],
      ready: false,
    };
  }

  submitInput = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    console.log("You are in the submit button");
    console.log(name);
    console.log(value);
    this.setState(
      {
        [name]: value,
      },
      () => {
        console.log("You're setting the new state");
      }
    );
  };

  sortName = () => {
    console.log("You have clicked the sort by name button");
  };

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = (query) => {
    API.getUsers(query)
      .then((res) => this.setState({ result: res.data.results, ready: true }))
      .catch((err) => console.log(err));
  };
  render() {
    if (this.state.ready) {
      return (
        <>
          <div className="jumbotron jumbotron-fluid p-3 mb-2 bg-dark text-white">
            <div className="container">
              <h1 className="display-4 mx-auto" style={{ width: "200px" }}>
                Employee Directory
              </h1>
              <p className="lead mx-auto" style={{ width: "600px" }}>
                Click on a caret to filter or use the search box to narrow your
                results.
              </p>
            </div>
          </div>
          <div className="container">
            <div className="input-group rounded mt-3">
              <input
                type="search"
                className="form-control rounded mx-auto"
                style={{ width: "200px" }}
                placeholder="Search"
              />
              <button onClick={this.submitInput} className="btn btn-primary">
                <i className="fas fa-search"></i>
              </button>
            </div>

            <table className="table table-striped mt-4">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th onClick={this.sortName} scope="col">
                    Name <i className="arrow down"></i>
                  </th>
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                  <th scope="col">DOB</th>
                </tr>
              </thead>
              <tbody>
                {this.state.result.map((employee, index) => {
                  // return <TableRow {...employee, key = index} />;
                  let date = new Date(employee.dob.date).toLocaleDateString();
                  return (
                    <TableRow
                      key={index}
                      image={employee.picture.thumbnail}
                      firstName={employee.name.first}
                      lastName={employee.name.last}
                      email={employee.email}
                      dob={date}
                      phone={employee.phone}
                    />
                  );
                })}
                {/* <tr>
                  <th scope="row">
                    <img src={this.state.result.picture.thumbnail} alt="" />
                  </th>
                  <td>
                    {this.state.result.name.first} {this.state.result.name.last}
                  </td>
                  <td>{this.state.result.phone}</td>
                  <td>
                    <a href="mailto: {this.state.result.email}">
                      {this.state.result.email}
                    </a>
                  </td>
                  <td>{this.state.result.dob.date}</td>
                </tr>
                <tr> */}
                {/* <th scope="row">
                    <img src={this.state.result.picture.thumbnail} alt="" />
                  </th>
                  <td>
                    {this.state.result.name.first} {this.state.result.name.last}
                  </td>
                  <td>{this.state.result.phone}</td>
                  <td>
                    <a href="mailto: {this.state.result.email}">
                      {this.state.result.email}
                    </a>
                  </td>
                  <td>{this.state.result.dob.date}</td>
                </tr>
                <tr>
                  <th scope="row">
                    <img src={this.state.result.picture.thumbnail} alt="" />
                  </th>
                  <td>
                    {this.state.result.name.first} {this.state.result.name.last}
                  </td>
                  <td>{this.state.result.phone}</td>
                  <td>
                    <a href="mailto: {this.state.result.email}">
                      {this.state.result.email}
                    </a>
                  </td>
                  <td>{this.state.result.dob.date}</td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </>
      );
    } else {
      return <></>;
    }
  }
}

export default Home;
