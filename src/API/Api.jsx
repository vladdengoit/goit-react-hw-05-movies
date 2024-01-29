import axios from 'axios';
const requestToPixby = axios.create({
  baseURL: 'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
  params: {
    key: '41746406-765aed4a48c8fd4ed49dbad68',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  },
});

export const getPictures = (q, page = 1) => {
  return requestToPixby.get('/', {
    params: {
      q,
      page,
    },
  });
};

export const fetchToAllPopularMovies = axios.create({
  baseURL: 'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOWYwMmZlMTQ0MTZmZWM0MWQ2NjgyYjU3Zjg5YTVmMSIsInN1YiI6IjYzYmVhODdjYTZlMmQyMDA4M2UzNTMxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8QcrMCrJiY1i0eDqnrk49lSdAwOhrQc_dHN5n_YiVyg',
  },
});
export const fetchforOneMovie = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'e9f02fe14416fec41d6682b57f89a5f1',
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOWYwMmZlMTQ0MTZmZWM0MWQ2NjgyYjU3Zjg5YTVmMSIsInN1YiI6IjYzYmVhODdjYTZlMmQyMDA4M2UzNTMxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8QcrMCrJiY1i0eDqnrk49lSdAwOhrQc_dHN5n_YiVyg',
  },
});
export const getMoviebyId = id => {
  return fetchforOneMovie.get(`/${id}?language=en-US`);
};
export const getCastbyId = id => {
  return fetchforOneMovie.get(`/${id}/credits?language=en-US`);
};

export const getReviewsbyId = id => {
  return fetchforOneMovie.get(`/${id}/reviews?language=en-US`);
};

export const fetchbySearch = axios.create({
  baseURL: 'https://api.themoviedb.org/3/search',
  params: {
    api_key: 'e9f02fe14416fec41d6682b57f89a5f1',
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOWYwMmZlMTQ0MTZmZWM0MWQ2NjgyYjU3Zjg5YTVmMSIsInN1YiI6IjYzYmVhODdjYTZlMmQyMDA4M2UzNTMxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8QcrMCrJiY1i0eDqnrk49lSdAwOhrQc_dHN5n_YiVyg',
  },
});
export const getMoviebySearch = (query, page = 1) => {
  return fetchbySearch.get(
    `movie?query=${query}&include_adult=false&language=en-US&page=${page}`
  );
};

// // CjNiqUa3uLNVtFj
//API -key: 41746406-765aed4a48c8fd4ed49dbad68

// e9f02fe14416fec41d6682b57f89a5f1

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOWYwMmZlMTQ0MTZmZWM0MWQ2NjgyYjU3Zjg5YTVmMSIsInN1YiI6IjYzYmVhODdjYTZlMmQyMDA4M2UzNTMxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8QcrMCrJiY1i0eDqnrk49lSdAwOhrQc_dHN5n_YiVyg
