import { Link } from 'react-router-dom';
import { FaComment } from 'react-icons/fa6';
import { FaArrowDownUpAcrossLine } from 'react-icons/fa6';
import { FaCalendar } from 'react-icons/fa6';
function ArticleCard({ article }) {
  let dateString = article.created_at;
  let date = new Date(dateString);
  const publishedAt = new Intl.DateTimeFormat('default', {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    year: 'numeric',
    month: 'short',
  }).format(date);

  return (
    <Link to={`/articles/${article.article_id}`} className={'link-styles'}>
      <article className="article-list-article">
        <img src={article.article_img_url} className="card-img" />
        <div class="card-content">
          <small className={`topic-topper ${article.topic}`}>
            <Link to={`/articles/?topic=${article.topic}`}>
              {article.topic}
            </Link>
          </small>
          <h3>{article.title}</h3>
        </div>
        <div class="card-footer">
          <p>
            <FaCalendar /> {publishedAt}
          </p>
          <p>
            <FaArrowDownUpAcrossLine />
            {article.votes}
          </p>
          <p>
            <FaComment /> {article.comment_count}
          </p>
        </div>
      </article>
    </Link>
  );
}

export default ArticleCard;
