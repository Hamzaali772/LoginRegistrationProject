const storeToken = (value) => {
    localStorage.setItem('token', value);
  };
  
  const getToken = () => {
    const token = localStorage.getItem('token');
    return token;
  };
  
  const removeToken = () => {
    localStorage.removeItem('token');
  };
  
  export { storeToken, getToken, removeToken };
  