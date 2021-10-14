import React from 'react';
import Link from 'next/link';
import { Box } from "@chakra-ui/react";
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

const noWrap = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
}

const DesktopTable = ({ data, tableStyle }) => {
  // const title = {
  //   maxWidth: "0",  // 레이아웃 탈영방지
  //   width: "100%"   // 제목영역 크기조절
  // }
  return (
    <Box display={{ base: 'none', md: 'block'}}>
      <Table {...tableStyle}>
        <Thead>
          <Tr>
            <Th {...noWrap}>카테고리</Th>
            <Th {...noWrap}>작성자</Th>
            <Th>제목</Th>
            <Th {...noWrap} isNumeric>일시</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.length >= 1 && data.map((item, index) => (
            <Tr key={item.title + index} >
              <Td {...noWrap}>{item.category}</Td>
              <Td {...noWrap}>{item.User.id}</Td>
              <Td>
                <Link href={`${categoryToContents(item.category)}/${item.id}`}>{item.title}</Link>
              </Td>
              <Td {...noWrap} isNumeric>{item.createdAt.slice(5, 10)}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

const MobileTable = ({ data, tableStyle }) => {
  // const title = {
  //   maxWidth: "0",
  //   width: "80%",
  // }
  return (
    <Box display={{ base: 'block', md: 'none'}}>
      <Table {...tableStyle}>
        <Thead>
          <Tr>
            <Th {...noWrap}>카테고리</Th>
            <Th>제목</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.length >= 1 && data.map((item, index) => (
            <Tr key={item.title + index} >
              <Td {...noWrap}>{item.category}</Td>
              <Td>
                <Link href={`${categoryToContents(item.category)}/${item.id}`}>{item.title}</Link>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

const ContentsTable = ({ data, tableStyle }) => {
  return (
    <>
      <DesktopTable data={data} tableStyle={tableStyle}></DesktopTable>
      <MobileTable data={data} tableStyle={tableStyle}></MobileTable>
    </>
  )
}

export default ContentsTable;
