import React, { useEffect, useRef } from 'react';
import { Box, Flex, AspectRatio, Divider, Stack } from '@chakra-ui/react';

const KakaoMap = () => {
  const container = useRef(null);

  useEffect(() => {
    if (typeof window !== undefined && typeof document !== undefined) {
      window.kakao?.maps.load(() => {  // v3 스크립트 동적로드
        const options = {
          center: new window.kakao.maps.LatLng(37.38684316418868, 126.97946559947053), // 지도의 중심좌표
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };
        var map = new window.kakao.maps.Map(container.current, options); // 지도 생성 및 객체 리턴

        var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/2018/pc/map/marker_map01.png', // 마커이미지의 주소입니다    
        imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
        imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
        // 지도를 클릭한 위치에 표출할 마커입니다
        var marker = new kakao.maps.Marker({ 
          // 지도 중심좌표에 마커를 생성합니다 
          position: map.getCenter(),
          image: markerImage // 마커이미지 설정
        }); 
        // 지도에 마커를 표시합니다
        marker.setMap(map);

        // 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        var content = '<div class="customoverlay">' +
        '  <a href="http://kko.to/8IX9yjgfM" target="_blank">' +
        '    <span class="title">의왕디딤돌교회</span>' +
        '  </a>' +
        '</div>';
        // 커스텀 오버레이가 표시될 위치입니다 
        var position = new kakao.maps.LatLng(37.38684316418868, 126.97946559947053);  
        // 커스텀 오버레이를 생성합니다
        var customOverlay = new kakao.maps.CustomOverlay({
          map: map,
          position: position,
          content: content,
          yAnchor: 1 
        });
        
        // 마커에 클릭이벤트를 등록합니다
        kakao.maps.event.addListener(marker, 'click', function() {
          window.open('http://kko.to/8IX9yjgfM');
        });
        
        // 지도 확대 축소를 제어할 수 있는 줌 컨트롤을 생성합니다
        var zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
        
        // 버튼 클릭에 따라 지도 확대, 축소 기능을 막거나 풀고 싶은 경우에는 map.setZoomable 함수를 사용합니다
        function setZoomable(zoomable) {
          // 마우스 휠로 지도 확대,축소 가능여부를 설정합니다
          map.setZoomable(zoomable);    
        }
        setZoomable();
      });
    }
    return () => {};
  }, []);

  return (
    <>
      <Flex direction="column">
        <AspectRatio w="100%" ratio={16 / 9}>
          <Box ref={container} zIndex="0" />
        </AspectRatio>
        <Divider my="25px" />
        <Stack fontSize="17px" >
          <Box><strong>주소:</strong> 경기 의왕시 내손로 76 보우상가 3층</Box>
          <Box>(지번) 경기 의왕시 내손동 637</Box>
        </Stack>
      </Flex>
    </>
  );
};

export default KakaoMap;
