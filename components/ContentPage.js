import React from 'react';
import PostCardWrapper from './PostCardWrapper';
import PostCard from './PostCard';

const ContentPage = ({ article, articles }) => {
  return (
    <PostCardWrapper article={article}>
      <PostCard
        article={article}
        articles={articles}
      />
    </PostCardWrapper>
  );
};

export default ContentPage;
