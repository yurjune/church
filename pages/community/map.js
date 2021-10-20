import React from 'react';
import { createClient } from 'contentful';
import SecondLayout from "../../components/SecondLayout";
import Working from '../../components/Working';

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const pictures = await client.getEntries({
    content_type: 'picture',
  });
  return {
    props: {
      pictures: pictures.items,
    }
  }
}

const Map = ({ pictures }) => {
  return (
    <SecondLayout pictures={pictures}>
      <Working />
    </SecondLayout>
  );
};

export default Map;
