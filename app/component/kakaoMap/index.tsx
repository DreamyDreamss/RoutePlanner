'use client';
import { useEffect, useState } from 'react';
import { MapWrapper } from './kakaoMap.styled';

const KakaoMap = () => {
	useEffect(() => {
		const script = document.createElement('script');
		script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAPS_API_KEY}&autoload=false`;
		script.async = true;
		document.head.appendChild(script);

		const onLoadKakaoMap = () => {
			if (window.kakao && window.kakao.maps) {
				window.kakao.maps.load(() => {
					const mapContainer = document.getElementById('map');
					const mapOption = {
						center: new window.kakao.maps.LatLng(37.3803, 128.6608), // 지도의 중심좌표
						level: 10, // 지도의 확대 레벨
					};
					new window.kakao.maps.Map(mapContainer, mapOption);
				});
			} else {
				console.error('Kakao Maps API가 로드되지 않았습니다.');
			}
		};
		script.addEventListener('load', onLoadKakaoMap);

		// 클린업 함수로 스크립트 제거
		return () => {
			document.head.removeChild(script);
			script.removeEventListener('load', onLoadKakaoMap);
		};
	}, []);

	return <MapWrapper id="map" />;
};

export default KakaoMap;
