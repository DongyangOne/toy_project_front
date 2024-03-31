
import axios from 'axios';

export const login = async (id, password) => {
  try {
    const response = await axios.post('http://218.146.29.203:8080/login', {
      id,
      password,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};


export const join = async (id, password) => {
  try {
    const response = await axios.post('http://218.146.29.203:8080/join', {
      id,
      password,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Join error:', error);
    throw error;
  }
};

export const checkIdDuplicate = async (id) => {
    try {
      const response = await axios.get(`http://218.146.29.203:8080/check-id?userId=${id}`);
      return response.data; 
    } catch (error) {
      console.error('ID check error:', error);
      throw error;
    }
  };
  
