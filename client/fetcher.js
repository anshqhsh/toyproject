import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080'; // axios.get('http://localhost:8080/messages')

// ...rest 로 인자가 여러개 들어오는 것 처리
const fetcher = async (method, url, ...rest) => {
  const res = await axios[method](url, ...rest);
  return res.data;
};

export default fetcher;
/*
get: axios.get(url[,config]) 
delete: axios.delete(url[,config]) 
post: axios.post(url, data[,config]) 
put: axios.put(url, data[,config]) 
*/
