import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=100&nat=us";

export const API = {
  getUsers: function () {
    return axios.get(BASEURL);
  },
};
