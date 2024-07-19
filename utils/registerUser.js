import axios from 'axios';

const registerUser = async (user) => {
  console.log('Registering user:');  
  try {
    const response = await axios.post('http://localhost:3001/users', user);

    if (response.status === 201) {
      // Registration successful
      console.log('Registration successful:', response.data);
      return response.data;
    } else {
      // Registration failed
      console.error('Registration failed:', response.status, response.data);
      throw new Error('Registration failed');
    }
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

export default registerUser;
