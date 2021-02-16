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

  // use handleFilter function with array.filter
  enterInput = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    console.log("You have pushed down on the keyboard");
    console.log(value);
    this.setState({
      [name]: value,
    });
  };

  // use .sort
  sortName = () => {
    console.log("You have clicked the sort by name button");
    this.sortFunc();
  };

  componentDidMount() {
    this.fetchUsers();
  }

  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state, callback) => {
      return;
    };
  }

  fetchUsers = (query) => {
    API.getUsers(query)
      .then((res) => this.setState({ result: res.data.results, ready: true }))
      .catch((err) => console.log(err));
  };

  filterFunc = () => {
    let array = this.state.result;
    var filter = new RegExp(this.state.search, "i");
    let newArray = array.filter(
      (result) =>
        filter.test(result.name.first) || filter.test(result.name.last)
    );
    // this.setState({ result: newArray });
    return newArray;
  };

  sortFunc = () => {
    let array = this.state.result;
    if (!this.state.ready) {
      array.sort(function (a, b) {
        var nameA = a.name.first.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.first.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      });
      this.setState({
        result: array,
        ready: true,
      });
    } else {
      array.sort(function (a, b) {
        var nameA = a.name.first.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.first.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }
      });
      this.setState({
        result: array,
        ready: false,
      });
    }
  };

  render() {
    return (
      <>
        <div className="jumbotron jumbotron-fluid p-3 mb-2 bg-dark text-white">
          <div className="container">
            <h1 className="display-4 mx-auto" style={{ width: "200px" }}>
              Employee Directory
            </h1>
            <p className="lead mx-auto" style={{ width: "350px" }}>
              Use the search box to narrow your results.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="input-group rounded mt-3">
            <input
              name="search"
              type="text"
              className="form-control rounded mx-auto"
              style={{ width: "200px" }}
              placeholder="Search"
              onChange={this.enterInput}
            />
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
              {this.filterFunc().map((employee, index) => {
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
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Home;
