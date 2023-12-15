import {
  FaRegHandPointRight,
  FaRegCalendar,
  FaRegComment,
} from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { formatDateString } from '../utils/utils';

function ArticleCard({ article }) {
  const publishedAt = formatDateString(article.created_at);

  return (
    <Link to={`/articles/${article.article_id}`} className={'no-decoration'}>
      <article className="article-list-article">
        <img
          src={article.article_img_url}
          className="card-img"
          alt={article.title}
        />
        <div className="card-content">
          <small className={`topic-topper ${article.topic}`}>
            {article.topic}
          </small>
          <h3>{article.title}</h3>
        </div>
        <div className="card-footer">
          <p>
            <FaRegCalendar /> {publishedAt}
          </p>
          <p>
            <FaRegHandPointRight />
            {article.votes}
          </p>
          <p>
            <FaRegComment /> {article.comment_count}
          </p>
        </div>
      </article>
    </Link>
  );
}

export default ArticleCard;
