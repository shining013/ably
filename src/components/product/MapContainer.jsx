import React, { useEffect } from "react";

const MapContainer = ({ address = "제주특별자치도 제주시 첨단로 242" }) => {
  useEffect(() => {
    // window.kakao가 로드되었는지 확인
    if (window.kakao && window.kakao.maps) {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map"); // 지도를 표시할 HTML 요소
        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.978), // 초기 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };

        const map = new window.kakao.maps.Map(container, options); // 지도를 생성합니다.

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(address, function (result, status) {
          // 정상적으로 검색이 완료됐으면
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(
              result[0].y,
              result[0].x
            );

            // 결과값으로 받은 위치를 마커로 표시합니다
            const marker = new window.kakao.maps.Marker({
              map: map,
              position: coords,
            });

            // 인포윈도우로 장소에 대한 설명을 표시합니다
            const infowindow = new window.kakao.maps.InfoWindow({
              content: `<div style="width:150px;text-align:center;padding:6px 0;">${address}</div>`,
            });
            infowindow.open(map, marker);

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
          } else {
            console.error("주소를 찾을 수 없습니다.");
          }
        });

        // 지도의 크기가 변경될 때마다 지도 중심을 유지합니다.
        window.addEventListener("resize", () => {
          map.relayout(); // 지도 크기를 재설정합니다.
          geocoder.addressSearch(address, function (result, status) {
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );
              map.setCenter(coords);
            }
          });
        });
      });
    }
  }, [address]);

  return <div id="map" className="w-full h-[400px]" />;
};

export default MapContainer;
