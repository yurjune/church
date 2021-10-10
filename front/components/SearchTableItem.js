import React from 'react';
import Link from 'next/link';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import { categoryToContents } from '../utils/categoryConverter';

const SearchTableItem = ({ data }) => {
  const hideWhenMobile = ['none', 'block', 'block', 'block'];
  const hideWhenTablet = ['none', 'none', 'block', 'block'];

  return (
    <Table variant="striped" colorScheme="green" size="md">
      <Thead>
        <Tr>
          <Th display={hideWhenMobile}>카테고리</Th>
          <Th>제목</Th>
          <Th isNumeric display={hideWhenTablet}>작성일시</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.length >= 1 && data.map((item, index) => (
          <Tr key={item.title + index}>
            <Td display={hideWhenMobile}>
              <Link href={`${categoryToContents(item.category)}/${item.id}`}>
                {item.category}
              </Link>
            </Td>
            <Td>
              <Link href={`${categoryToContents(item.category)}/${item.id}`}>
                {item.title}
              </Link>
            </Td>
            <Td isNumeric display={hideWhenTablet}>
              <Link href={`${categoryToContents(item.category)}/${item.id}`}>
                {item.createdAt.substring(2, 10)}
              </Link>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default SearchTableItem;