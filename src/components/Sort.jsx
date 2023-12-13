const Sort = ({ sortQuery, setSortQuery, orderQuery, setOrderQuery }) => {
  const handleChangeSort = (e) => {
    setSortQuery(e.target.value);
  };

  const handleChangeOrder = (e) => {
    setOrderQuery(e.target.value);
  };

  return (
    <form>
      <label htmlFor="sort">Sort: </label>
      <select name="sort" value={sortQuery} onChange={handleChangeSort}>
        <option value="comment_count">Comment Count</option>
        <option value="votes">Votes</option>
        <option value="article_id">Article ID</option>
        <option value="created_at">Created Date</option>
      </select>
      <label htmlFor="order">Order: </label>
      <select name="order" value={orderQuery} onChange={handleChangeOrder}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </form>
  );
};

export default Sort;
