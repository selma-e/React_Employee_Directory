import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=100";

export const API = {
  getUsers: function () {
    return axios.get(BASEURL);
  },
};
