const ACCESS_KEY = import.meta.env.VITE_APP_UNSPLASH_ACCESS_KEY!;

export const getPhoto = (pageNumber: number) =>
  fetch(
    `https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}&page=${pageNumber}&per_page=10`
  )
    .then(async (res) => await res.json())
    .catch((err) => err);
