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

const noWrap = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
}
const title = {
  maxWidth: "0",  // 레이아웃 탈영방지
  width: ["100%", "100%", "65%", "65%"],   // 제목영역 크기조절
}
const hideWhenMobile = ['none', 'block', 'block', 'block'];
const hideWhenTablet = ['none', 'none', 'block', 'block'];

const ContentsListTable = ({ data, tableStyle }) => {
  return (
    <Table
      {...tableStyle}
    >
      <Thead>
        <Tr>
          <Th
            {...noWrap}
            display={hideWhenMobile}
          >
            카테고리
          </Th>
          {/* <Th
            {...noWrap}
            display={hideWhenMobile}
          >
            번호
          </Th> */}
          <Th
            {...title}
          >
            제목
          </Th>
          <Th
            isNumeric
            {...noWrap}
            display={hideWhenTablet}
          >
            작성일시
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.length >= 1 && data.map((item, index) => (
          <Tr
            key={item.title + index}
          >
            <Td
              {...noWrap}
              display={hideWhenMobile}
            >
              {item.category}
            </Td>
            {/* <Td
              {...noWrap}
              display={hideWhenMobile}
            >
              {item.id}
            </Td> */}
            <Td
              {...noWrap}
              {...title}
            >
              <Link href={`${categoryToContents(item.category)}/${item.id}`}>
                {item.title}
              </Link>
            </Td>
            <Td
              isNumeric
              {...noWrap}
              display={hideWhenTablet}
            >
              {item.createdAt.substring(2, 10)}
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default ContentsListTable;
