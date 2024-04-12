import axios from "axios";

export const login = async (id, password) => {
  await axios
    .post("http://218.146.29.203:8080/user/login", {
      username: id,
      password: password,
    })
    .then(res => {
      window.sessionStorage.setItem("session", id);
      console.log(res.data);
    })
    .catch(error => {
      console.log(error);
    });
};

export const join = async (id, password) => {
  try {
    const response = await axios.post(
      "http://218.146.29.203:8080/user/register",
      {
        username: id,
        password: password,
        name: "혜림",
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Join error:", error);
    throw error;
  }
};

export const checkIdDuplicate = async id => {
  try {
    const response = await axios.get(
      `http://218.146.29.203:8080/check-id?userId=${id}`
    );
    return response.data;
  } catch (error) {
    console.error("ID check error:", error);
    throw error;
  }
};
