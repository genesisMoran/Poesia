// The data is coming from `:3000`
const BASE_URL = 'http://localhost:3000';

// NEED TO INCLUDE USERS TO SOME CAPACITY

// AddPoem
  // Create
  export function savePoem(poem) {
    const opts = {
      method: 'POST',
      body: JSON.stringify({ data: poem }),
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

// ListPoems
  // Read
export function fetchPoems() {
  return fetch(`${BASE_URL}/poems`)
    .then(resp => resp.json())
    .catch(err => {
      throw Error(err);
    });
}

// EditPoem
  // Update
export function updatePoem(poem) {
  const opts = {
    method: 'PUT',
    body: JSON.stringify(poem), // might have to change to `{ data: poem }` but try and see 
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return fetch(`${BASE_URL}/poems/${poem.poem_id}`, opts) // not sure what to put inside `${poemId}`
  .then(resp => {
      return resp.json();
  }).catch(error => {
      throw Error(error);
  });
}
  // Delete
export function deletePoem(poem) {
  const opts = {
    method: 'DELETE',
    body: JSON.stringify(poem),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return fetch(`${BASE_URL}/poems/${poem.poem_id}`, opts)
  .then(resp => resp.json());
}
