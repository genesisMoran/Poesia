// The data is coming from `:3000`
const BASE_URL = process.env.REACT_APP_API_URL

// USER
  export function fetchUsers() {
    return fetch(`${BASE_URL}/users`)
      .then(resp => resp.json())
      .catch(err => {
        throw Error(err);
      });
  }

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
  // Read all poems
export function fetchPoems() {
  return fetch(`${BASE_URL}/poems`)
    .then(resp => resp.json())
    .catch(err => {
      throw Error(err);
    });
}
  // Read one poem    * come back to this
export function fetchPoem(poem) {
  return fetch(`${BASE_URL}/poems/${poem.id}`)
    .then(resp => {
        return resp.json();
    }).catch(err => {
        throw Error(err);
    });
}

// EditPoem
  // Update   
  export function updatePoem(poem) {
    const opts = {
      method: 'PUT',
      body: JSON.stringify({ data: poem }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    return fetch(`${BASE_URL}/poems/${poem.id}`, opts)
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
    body: JSON.stringify({ data: poem }),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return fetch(`${BASE_URL}/poems/${poem.id}`, opts)
  .then(resp => resp.json());
}
