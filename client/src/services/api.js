// The data is coming from `:3000`
const BASE_URL = 'http://localhost:3000';

export function fetchPoems() {
  return fetch(`${BASE_URL}/poems`)
    .then(resp => resp.json())
    .catch(err => {
      throw Error(err);
    });
}

// Fetch one poem
// export function fetchPoem(poemId, userId) {
//   return fetch(`${BASE_URL}/Poems/${poemId}/users/${userId}`)
//   .then(resp => {
//       return resp.json()
//   })
//   .catch(err => {
//       throw Error(err);
//   });
// }

// export function savePoem(poem) {
//   const opts = {
//     method: 'POST',
//     body: JSON.stringify(poem),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   };

// export function fetchUsers() {
//     return fetch(`${BASE_URL}/users`)
//       .then(resp => resp.json())
//       .catch(err => {
//         throw Error(err);
//       });
// }
