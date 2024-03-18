import axios from 'axios';

const mockTodos = [
  { id: 1, text: 'Learn Redux', completed: false },
  { id: 2, text: 'Write Code', completed: true },
];

export const fetchTodos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockTodos);
    }, 1000);
  });
};

export const fetchTech = async (currentPage, pageSize) => {

  try {
    const response = await axios.get(`https://api-primedeveloper.vercel.app/admin/api/admin/tags?pageSize=${pageSize}&currentPage=${currentPage}`);
    if(response.status === 200) return response?.data?.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const createTech = async () => {
  try {
    
  } catch (error) {
    
  }
}