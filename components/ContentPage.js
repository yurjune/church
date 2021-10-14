import React from 'react';
import PostCardWrapper from './PostCardWrapper';
import PostCard from './PostCard';
import useFetch from '../hooks/useFetch';

const ContentPage = ({ article }) => {
  return (
    <PostCardWrapper article={article}>
      <PostCard article={article} />
    </PostCardWrapper>
  );
};

export default ContentPage;
