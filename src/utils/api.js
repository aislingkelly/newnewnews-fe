import axios from 'axios';

const api = axios.create({
  baseURL: 'https://new-new-news.onrender.com/api',
});

export const getArticles = (topicQuery) => {
  let queryString = topicQuery ? `?topic=${topicQuery}` : '';
  return api.get(`/articles/${queryString}`).then((response) => {
    return response.data.articles;
  });
};

export const getArticle = (article_id) => {
  return api.get(`/articles/${article_id}`).then((response) => {
    return response.data.article;
  });
};

export const getComments = (article_id) => {
  return api.get(`/articles/${article_id}/comments`).then((response) => {
    return response.data.comments;
  });
};

export const patchArticle = (article_id, newVote) => {
  const patchBody = { inc_votes: newVote };
  return api.patch(`/articles/${article_id}`, patchBody).then((response) => {
    return response.data.article;
  });
};

export const postComment = (input, article_id) => {
  const postBody = input;
  return api
    .post(`/articles/${article_id}/comments`, postBody)
    .then((response) => {
      return response.data.comment;
    });
};

export const deleteComment = (comment_id) => {
  return api.delete(`/comments/${comment_id}`);
};

export const getTopics = () => {
  return api.get(`/topics`).then((response) => {
    return response.data;
  });
};
