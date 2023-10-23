// Import Axios or any other HTTP client library
import axios from 'axios';

async function Profile() {
  try {
    const response = await axios.get('/api/auth');
    const data = response.data;

    // You can now use the data in your application
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Call the fetchData function to get the user information
Profile();
