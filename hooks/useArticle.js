import { postNumberPerOnePage } from "./usePagination";

const timeParser = (createdAt) => {
  const timeStamp = Date.parse(new Date(createdAt)) / 1000;
  return timeStamp;
}

const checkQueryString = (articles, value) => {
  if (value) {
    const result = articles.filter(article => article.fields.tag?.find(item => item === value));
    return result;
  }
  return articles;
}

// 가장 오래된 게시글이 가장 뒤로가게 정렬
export const sortArticles = (articles, value) => {
  const result = checkQueryString(articles, value);
  const sortedArticles = result.sort((a, b) => {
    return timeParser(b.sys.createdAt) - timeParser(a.sys.createdAt);
  });
  return sortedArticles;
}

// 게시글을 한페이지에 12개씩 나타냄
export const getLimitedArticles = (articles, currentPage) => {
  const num = postNumberPerOnePage * currentPage;
  const limitedArticles = articles.slice(num - postNumberPerOnePage, num);
  return limitedArticles;
};
