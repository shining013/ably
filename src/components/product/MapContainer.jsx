import React, { useEffect } from "react";

const MapContainer = ({ latitude = 37.5665, longitude = 126.978 }) => {
  useEffect(() => {
    // window.kakao가 로드되었는지 확인
    if (window.kakao && window.kakao.maps) {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map"); // 지도를 표시할 HTML 요소
        const options = {
          center: new window.kakao.maps.LatLng(latitude, longitude), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };

        const map = new window.kakao.maps.Map(container, options); // 지도를 생성합니다.

        // 마커를 생성합니다.
        const markerPosition = new window.kakao.maps.LatLng(
          latitude,
          longitude
        );
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        // 마커를 지도에 표시합니다.
        marker.setMap(map);

        // 지도의 크기가 변경될 때 마다 마커가 중앙에 오도록 처리
        window.addEventListener("resize", () => {
          map.relayout(); // 지도 크기를 재설정합니다.
          map.setCenter(new window.kakao.maps.LatLng(latitude, longitude)); // 지도의 중심을 설정합니다.
        });
      });
    }
  }, [latitude, longitude]);

  return (
    <div
      id="map"
      style={{ width: "100%", height: "400px" }} // 지도의 컨테이너 크기를 설정합니다.
    />
  );
};

export default MapContainer;
