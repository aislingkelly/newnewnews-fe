import axios from 'axios';

const api = axios.create({
  baseURL: 'https://new-new-news.onrender.com/api',
});

export const getArticles = () => {
  return api.get(`/articles`).then((response) => {
    return response.data.articles;
  });
};

export const getArticle = (article_id) => {
  return api.get(`/articles/${article_id}`).then((response) => {
    return response.data.article;
  });
};
