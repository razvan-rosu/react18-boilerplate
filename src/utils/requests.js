export const fetchPosts = async () => {
  const apiRes = await fetch(`https://jsonplaceholder.typicode.com/posts`)

  if (!apiRes.ok) {
    throw new Error(`posts fetch not ok`);
  }

  return apiRes.json();
}

export const fetchComments = async ({queryKey}) => {
  const postId = queryKey[1];

  const apiRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)

  if (!apiRes.ok) {
    throw new Error(`posts/${postId}/comments fetch not ok`);
  }

  return apiRes.json();
}

export const fetchUser = async () => {

  const apiRes = await fetch(`https://jsonplaceholder.typicode.com/users`);

  if (!apiRes.ok) {
    throw new Error(`users fetch not ok`);
  }

  return apiRes.json();
}
