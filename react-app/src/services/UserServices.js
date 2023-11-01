import axios from "axios";

const postRegisterUser = async (phoneNo, email, userName, password) => {
  //console.log(email);
  return axios.post("http://localhost:5000/api/v1/auth/register", {
    phoneNo,
    email,
    userName,
    password,
  });
};

const postLoginUser = (userName, password) => {
  return axios.post("http://localhost:5000/api/v1/auth/login", { userName, password });
};

export { postLoginUser, postRegisterUser };
