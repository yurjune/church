const timeParser = (createdAt) => {
  const timeStamp = Date.parse(new Date(createdAt)) / 1000;
  return timeStamp;
}

// 가장 오래된 게시글이 가장 뒤로가게 정렬하는 함수입니다
const useTime = (articles) => {
  const result = articles.sort((a, b) => {
    return timeParser(a.sys.createdAt) - timeParser(b.sys.createdAt);
  });
  const reversedResult = [...result].reverse();
  return reversedResult;
}

export default useTime;
