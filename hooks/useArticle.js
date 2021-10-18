// 가장 오래된 게시글이 가장 뒤로가게 정렬
export const sortArticles = (articles) => {
  const timeParser = (createdAt) => {
    const timeStamp = Date.parse(new Date(createdAt)) / 1000;
    return timeStamp;
  }
  const result = articles.sort((a, b) => {
    return timeParser(b.sys.createdAt) - timeParser(a.sys.createdAt);
  });
  return result;
}

// 게시글을 한페이지에 12개씩 나타냄
export const getLimitedArticles = (articles, page) => {
  const num = 12 * page;
  const limitedArticles = articles.slice(num - 12, num);
  return limitedArticles;
};
