const ArticleSorting = ({
  sortQuery,
  setSortQuery,
  orderQuery,
  setOrderQuery,
}) => {
  const handleChangeSort = (e) => {
    setSortQuery(e.target.value);
  };

  const handleChangeOrder = (e) => {
    setOrderQuery(e.target.value);
  };

  return (
    <form className="sort-form">
      <label htmlFor="sort">
        <small>Sort:</small>{' '}
      </label>
      <select name="sort" value={sortQuery} onChange={handleChangeSort}>
        <option value="comment_count">Comments</option>
        <option value="votes">Votes</option>
        <option value="created_at">Date</option>
      </select>

      <label htmlFor="order">
        <small>Order:</small>{' '}
      </label>
      <select name="order" value={orderQuery} onChange={handleChangeOrder}>
        <option value="asc">Low - High</option>
        <option value="desc">High - Low</option>
      </select>
    </form>
  );
};

export default ArticleSorting;
