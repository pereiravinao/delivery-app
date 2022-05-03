const appJson = 'application/json';

export const fetchApi = async (email, password) => {
  const fecthLogin = fetch('http://localhost:3003/login', {
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
  return fecthLogin;
};

export const fetchApiRegister = async (name, email, password) => {
  const fetchRegister = fetch('http://localhost:3003/register', {
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
  return fetchRegister;
};
