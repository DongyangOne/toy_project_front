import axios from "axios";

export const login = async (id, password) => {
  try {
    const response = await axios.post("http://218.146.29.203:8080/user/login", {
      username: id,
      password: password,
    },{ withCredentials: true });

    console.log("토큰 쿠키 값 확인 : ", document.cookie);

    const token = document.cookie; 
    console.log("할당된 토큰 쿠키 값 확인 : ",token);
    window.sessionStorage.setItem("session", `Bearer ${token}`);  

    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};


export const join = async (id, password) => {
  try {
    const response = await axios.post(
      "http://218.146.29.203:8080/user/register",
      {
        username: id,
        password: password,
        name: "혜림",
      },{ withCredentials: true }
    );
    console.log(response);
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
    
  

export const createDiary = async (title, content, weather) => {
  try {
    const sessionToken = window.sessionStorage.getItem("session");
    console.log("Session Token: ", sessionToken); 

    if (!sessionToken) {
      throw new Error("로그인이 필요합니다.");
    }

    const tokenReplace = sessionToken.replace('Bearer ', '');
    const decodedToken = tokenReplace;
  

    const response = await axios.post(
      "http://218.146.29.203:8080/diary",
      {
        title,
        content,
        weather,
      },
      {
        headers: {
          Authorization:  `Bearer ${decodedToken}`,
          withCredentials: true
        },
      }
    );
    console.log("일기 생성 성공");
    return response.data;
  } catch (error) {
    console.error("Create diary error:", error);
    throw error;
  }
};

export const getUserDiaries = async (userId) => {
  try {
    const sessionToken = window.sessionStorage.getItem("session");
    if (!sessionToken) {
      throw new Error("로그인이 필요합니다.");
    }

    const response = await axios.get(`http://218.146.29.203:8080/diary/${userId}`, {
      headers: { Authorization: sessionToken },
    });
    return response.data;
  } catch (error) {
    console.error("getUserDiary error:", error);
    throw error;
  }
};

export const getDiaryById = async (id) => {
  try {
    const sessionToken = window.sessionStorage.getItem("session");
    if (!sessionToken) {
      throw new Error("로그인이 필요합니다.");
    }

    const response = await axios.get(`http://218.146.29.203:8080/diary/${id}`, {
      headers: { Authorization: sessionToken },
    });
    return response.data;
  } catch (error) {
    console.error("Error getDiaryById : ", error);
    throw error;
  }
};
