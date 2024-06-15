import axios from 'axios';

const API_KEY = '44398563-cf059515c803c5aba714f6295';
const API_BASE_URL = 'https://pixabay.com/api/';

export async function searchImages(query, page = 1, perPage = 40) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: perPage,
  };

  const { data } = await axios.get(`${API_BASE_URL}?key=${API_KEY}`, {
    params,
  });
  return data;
}
