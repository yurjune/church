import React from 'react';
import { createClient } from 'contentful';
import { Image } from '@chakra-ui/react';
import SimplePage from '../../components/SimplePage';
import AppLayout from '../../components/AppLayout';

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

const Read = ({ pictures }) => {
  const pic = pictures.find(item => item.fields.picture.fields.title === "readBible")
    .fields.picture.fields.file.url;
  return (
    <>
      <AppLayout
        pictures={pictures}
      >
        <SimplePage title="성경통독표">
          <Image src={"http://" + pic} />
        </SimplePage>
      </AppLayout>
    </>
  );
};

export default Read;
