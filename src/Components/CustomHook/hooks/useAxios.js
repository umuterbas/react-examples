import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useAxios(url, method, payload) {
  const [data, setData] = useState(undefined);
  useEffect(() => {
    const fetchData = async () => {
      switch (method) {
        case 'get':
          console.log('getting');
          const someData = await axios.get(url);
          setData(someData.data);
          return;
        case 'post':
          console.log('posting');
          axios.post(url, payload).then((res) => setData(res.data));
          return;
        default:
          return;
      }
    };
    fetchData();
  }, []);
  console.log('data hook', data);
  return { data: data };
}
