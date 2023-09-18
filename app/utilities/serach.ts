const BASE_URL = process.env.REACT_APP_BASE_URL;
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

export const getMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/3/movie/popular`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();
    return result;
  } catch (error: any) {
    return error.message;
  }
};

export const searchMovies = async (query: string) => {
  try {
    const response = await fetch(
      `${BASE_URL}/3/search/movie?query=${query}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );
    const result = await response.json();
    return result;
  } catch (error: any) {
    return error.message;
  }
};

export const nowPlaying = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/3/movie/top_rated?language=en-US&page=1`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );
    const result = await response.json();
    return result;
  } catch (error: any) {
    return error.message;
  }
};

export const getCategoryButtons = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/3/movie/top_rated?language=en-US&page=1`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );
    const result = await response.json();
    return result;
  } catch (error: any) {
    return error.message;
  }
};

export const getCategoryDetail = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/3/movie/top_rated?language=en-US&page=1`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );
    const result = await response.json();
    return result;
  } catch (error: any) {
    return error.message;
  }
};

export const getCategories = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/3/movie/top_rated?language=en-US&page=1`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );
    const result = await response.json();
    return result;
  } catch (error: any) {
    return error.message;
  }
};