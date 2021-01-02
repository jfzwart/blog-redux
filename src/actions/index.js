import jsonPlaceholder from '../apis/jsonPlaceholder'


export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response })
};

// REFACTORED FROM:
// export const fetchPosts = () => {
//   return async function(dispatch, getState) {
//     const response = await jsonPlaceholder.get('/posts');

//   dispatch({ type: 'FETCH_POSTS', payload: response })
//   };
// };

//action creaters must return plain javascript object with a type property
