export const fetchApi = async (email, password) => {
  return await fetch('http://localhost:3003/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    })
  }
)};