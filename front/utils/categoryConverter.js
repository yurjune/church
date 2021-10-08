export const categoryToUrl = (category) => {
  if (category === '주일예배') {
    return '/movies/sunday';
  }
  if (category === '수요예배') {
    return '/movies/wednesday';
  }
  if (category === '교회소식') {
    return '/community/news';
  }
  if (category === '성경통독표') {
    return '/#';
  }
  if (category === '오시는길') {
    return '/community/map';
  }
  return;
};

export const categoryToContents = (category) => {
  if (category === '주일예배') {
    return '/contents/sunday';
  }
  if (category === '수요예배') {
    return '/contents/wednesday';
  }
  if (category === '교회소식') {
    return '/contents/news';
  }
  return;
};
