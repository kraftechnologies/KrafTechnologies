import axios from 'axios';

const API_URL = 'http://localhost:5000/api/admin/featuredinsights';

const getFeaturedInsights = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching featured insights:', error);
    throw error;
  }
};

export default getFeaturedInsights;
