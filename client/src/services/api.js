// The data is coming from `:3000`
const BASE_URL = 'http://localhost:3000';

// ListPoems
export function fetchPoems() {
  return fetch(`${BASE_URL}/poems`)
    .then(resp => resp.json())
    .catch(err => {
      throw Error(err);
    });
}

// AddPoem
export function savePoem(poem) {
  const opts = {
    method: 'POST',
    body: JSON.stringify(poem),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return fetch(`${BASE_URL}/poems`, opts)
  .then(resp => {
      return resp.json();
  }).catch(error => {
      throw Error(error);
  });
}
