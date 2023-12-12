import { Link } from 'react-router-dom';
import { MdComment } from 'react-icons/md';
import { MdThumbsUpDown } from 'react-icons/md';
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

  console.log(
    new Intl.DateTimeFormat('default', {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      year: 'numeric',
      month: 'short',
    }).format(date)
  );

  return (
    <Link to={`/articles/${article.article_id}`} className={'link-styles'}>
      <article className="article-list-article">
        <div>
          <small className="blue-topper">{article.topic}</small>
          <h3>{article.title}</h3>
          <p>
            {publishedAt} <MdThumbsUpDown />
            {article.votes} <MdComment /> {article.comment_count}
          </p>
        </div>
        <div>
          <img src={article.article_img_url} className="article-list-img" />
        </div>
      </article>
    </Link>
  );
}

export default ArticleCard;
