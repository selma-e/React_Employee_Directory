import { useState, useEffect } from "react";
import { API } from "../utils/API";

function Home() {
  const [users, setUsers] = useState([]);
  useEffect(function () {
    API.getUsers().then(function (res) {
      setUsers(function () {
        return res.results;
      });
    });
  }, []);
  console.log(users);
  return (
    <>
      <div className="jumbotron jumbotron-fluid p-3 mb-2 bg-dark text-white">
        <div className="container">
          <h1 className="display-4 mx-auto" style={{ width: "200px" }}>
            Employee Directory
          </h1>
          <p className="lead mx-auto" style={{ width: "700px" }}>
            Click on carrots to filter by heading or use the search box to
            narrow your results.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="input-group rounded">
          <input
            type="search"
            className="form-control rounded mx-auto"
            style={{ width: "200px" }}
            placeholder="Search"
          />
          <span className="input-group-text border-0" id="search-addon">
            <i className="fas fa-search"></i>
          </span>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">DOB</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <img src="../Assets/small-person-icon-24.jpg" />
              </th>
              <td>Miss Piggy</td>
              <td>(000)000-0000</td>
              <td>
                <a href="mailto: test@test.com">test@test.com</a>
              </td>
              <td>2/18/88</td>
            </tr>
            <tr>
              <th scope="row">
                <img src="../Assets/small-person-icon-24.jpg" />
              </th>
              <td>Miss Piggy</td>
              <td>(000)000-0000</td>
              <td>
                <a href="mailto: test@test.com">test@test.com</a>
              </td>
              <td>2/18/88</td>
            </tr>
            <tr>
              <th scope="row">
                <img src="../Assets/small-person-icon-24.jpg" />
              </th>
              <td>Miss Piggy</td>
              <td>(000)000-0000</td>
              <td>
                <a href="mailto: test@test.com">test@test.com</a>
              </td>
              <td>2/18/88</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Home;
