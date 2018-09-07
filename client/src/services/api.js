const BASE_URL = process.env.REACT_APP_BASE_URL

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
