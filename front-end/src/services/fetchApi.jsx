const appJson = 'application/json';
const NUMBER = 3003;
const PORT = process.env.REACT_APP_BACKEND_PORT || NUMBER;
const URL = process.env.REACT_APP_HOSTNAME || 'localhost';

export const fetchApi = async (email, password) => {
  const fecthLogin = fetch(`http://${URL}:${PORT}/login`, {
    method: 'POST',
    headers: {
      Accept: appJson,
      'Content-Type': appJson,
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const response = await fecthLogin;
  console.log(response);
  return response;
};

export const fetchApiRegister = async (name, email, password) => {
  const fetchRegister = fetch(`http://${URL}:${PORT}/register`, {
    method: 'POST',
    headers: {
      Accept: appJson,
      'Content-Type': appJson,
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  });
  const response = await fetchRegister;
  return response;
};
