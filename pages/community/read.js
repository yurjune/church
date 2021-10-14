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
  const res = await client.getEntries({
    content_type: 'picture',
  });
  return {
    props: {
      picture: res.items,
    }
  }
}

const Read = ({ picture }) => {
  const header = picture.find(item => item.fields.picture.fields.title === "header")
    .fields.picture.fields.file.url;
  const pic = picture.find(item => item.fields.picture.fields.title === "readBible")
    .fields.picture.fields.file.url;
  return (
    <>
      <AppLayout
        header={header}
      >
        <SimplePage title="성경통독표">
          <Image src={"http://" + pic}></Image>
        </SimplePage>
      </AppLayout>
    </>
  );
};

export default Read;
