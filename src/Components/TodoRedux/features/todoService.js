import axios from 'axios';

const todoService = {
  get: async () => {
    return await axios.get('https://jsonplaceholder.typicode.com/todos');
  },
};

export default todoService;
