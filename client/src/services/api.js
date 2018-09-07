// The data is coming from `:3000`
const BASE_URL = 'http://localhost:3000';

export function fetchPoems() {
  return fetch(`${BASE_URL}/poems`)
    .then(resp => resp.json())
    .catch(err => {
      throw Error(err);
    });
}

// export function fetchUsers() {
//     return fetch(`${BASE_URL}/users`)
//       .then(resp => resp.json())
//       .catch(err => {
//         throw Error(err);
//       });
// }
