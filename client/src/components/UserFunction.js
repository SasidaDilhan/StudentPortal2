import axios from "axios";

export const register = (newUser) => {
  return axios
    .post("users/register", {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password,
    })
    .then((res) => {
      console.log("Registered");
      window.alert("Registered");
    });
};

export const login = async (user) => {
  try {
    const res = await axios.post("users/login", {
      email: user.email,
      password: user.password,
    });
    localStorage.setItem("usertoken", res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
