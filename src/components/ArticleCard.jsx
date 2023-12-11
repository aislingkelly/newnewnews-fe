import { Link } from 'react-router-dom';

function ArticleCard({ article }) {
  return (

    <Link to={`/articles/${article.article_id}`} className={'link-styles'}>

      <article className="article-list-article">
        <div>
          <h3>{article.title}</h3>
          <small>
            Votes: {article.votes} | Comment count: {article.comment_count} |
            Topic: {article.topic} | Created at: {article.created_at}
          </small>
        </div>
        <div>
          <img src={article.article_img_url} className="article-list-img" />
        </div>
      </article>
    </Link>
  );
}

export default ArticleCard;
