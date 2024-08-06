import { useContext, useCallback, useState } from 'react';
import { MapContext } from '@/app/tour/map/context/kakaoMap';
import { MarkerOptions } from '@/app/tour/map/types';

export const useMap = () => {
	const context = useContext(MapContext);
	if (!context) {
		throw new Error('useMap must be used within a MapProvider');
	}
	const { map, setMap, markers } = context;

	// 공통으로 사용할 마커생성
	const addMarker = useCallback(
		(options: MarkerOptions) => {
			if (map) {
				const { position, imageSrc, imageSize, imageOption } = options;

				let markerImage;
				if (imageSrc && imageSize && imageOption) {
					const size = new window.kakao.maps.Size(imageSize.width, imageSize.height);
					const option = new window.kakao.maps.Point(imageOption.offsetX, imageOption.offsetY);
					markerImage = new window.kakao.maps.MarkerImage(imageSrc, size, { offset: option });
				}

				const markerPosition = new window.kakao.maps.LatLng(position.lat, position.lng);

				const marker = new window.kakao.maps.Marker({
					position: markerPosition,
					image: markerImage,
				});

				marker.setMap(map);
				markers.push(marker);
			} else {
				console.error('지도 인스턴스가 아직 준비되지 않았습니다.');
			}
		},
		[map, markers],
	);

	const handleRemoveMarker = () => {
		for (let i = 0; i < markers.length; i++) {
			markers[i].setMap(null);
		}
	};

	return { map, setMap, markers, addMarker, handleRemoveMarker };
};
