# :church: 디딤돌교회

## :sunny: 소개
:church: 아버지가 다니시는 교회에서 사용할 홈페이지

주소: https://church-blush.vercel.app/
<br/>
<br/>

## :sunny: 사용기술
백엔드:
<br/>
<br/>
<img src="https://img.shields.io/badge/Contentful-2478CC?style=flat-square&logo=Contentful&logoColor=white"/><a/>
- Headless CMS로 Contentful을 사용하여 컨텐츠를 관리하는 admin페이지를 대체
- Contentful의 API를 활용하여 작성한 컨텐츠를 프론트에서 렌더링
<br/>

프론트:
<br/>
<br/>
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/><a/>
<img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white"/><a/>
<img src="https://img.shields.io/badge/Chakra UI-319795?style=flat-square&logo=Chakra UI&logoColor=white"/><a/>
- React.js와 Next.js를 사용하여 화면 개발
- Next.js의 getStaticProps와 getStaticPaths를 사용하여 정적 페이지 생성
- CSS Framework로 Bootstrap이나 Material UI 대신 Chakra UI 사용
- Open API인 Kakao Maps API를 프로젝트에 활용
<br/>

배포:
- 프론트단을 vercel을 통하여 배포
<br/>

### :bulb: 기술 사용 배경
- 홈페이지 특성상 관리자만 컨텐츠를 작성하므로 headless CMS를 이용하여 컨텐츠와 서비스를 분리
- 관리자만 CMS에 주기적으로 글을 작성하고 이외에 페이지를 업데이트할 필요가 없으므로 정적 페이지로 만들고 이를 위해 Next.js 프레임워크를 선택
<br/>
<br/>

## :sunny: 주요 페이지

### :bulb: 메인 페이지
- 교회를 소개하는 페이지
<br/>

![Animation1](https://user-images.githubusercontent.com/84958904/148904031-073a1689-d8f9-4dee-86d6-9638d0a04250.gif)
<br/>
<br/>

### :bulb: 예배와 말씀
+ 카테고리별 설교영상을 표시
<br/>

![Animation2](https://user-images.githubusercontent.com/84958904/148979562-1307ca4a-15d3-4700-b3df-2700fe42122a.gif)
<br/>
<br/>

+ 페이지네이션: 게시글 수를 바탕으로 필요한 페이지 수 만큼 표시
<br/>

![Animation5](https://user-images.githubusercontent.com/84958904/148981998-e65a90fc-6793-487a-8922-4c98faaf4380.gif)
<br/>
<br/>

### :bulb: 게시글
<br/>

![Animation3](https://user-images.githubusercontent.com/84958904/148979988-2a2eb29b-0580-4195-ad76-01db3b72a375.gif)
<br/>
<br/>

### :bulb: 찾아오시는 길
+ KakaoMap API를 이용하여 구현
<br/>

![Animation4](https://user-images.githubusercontent.com/84958904/148980768-9dcda6f8-98ad-4142-99ac-e8334fdc4555.gif)
<br/>
<br/>

### :bulb: 게시글 검색
<br/>

![검색기능](https://user-images.githubusercontent.com/84958904/148994746-2459fa8e-3243-4173-8997-b628df0dbc9e.png)
<br/>
<br/>

## :sunny: 반응형 구현
+ 모바일, 태블릿, 데스트탑 화면에 맞게 반응형으로 제작
<br/>

![Animation6](https://user-images.githubusercontent.com/84958904/148994525-b6feda13-b539-4cd4-88b9-72d35e69fb52.gif)
