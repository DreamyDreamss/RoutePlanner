import { useMap } from './useMap';

export const useRecommend = () => {
	const { markers, addMarker, handleRemoveMarker } = useMap();

	// 관광지추천 임의마크 생성
	const addMarkerRecommandation = () => {
		if (markers.length > 0) handleRemoveMarker();

		const options = {
			position: { lat: 37.54699, lng: 127.09598 },
			imageSrc: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png',
			imageSize: { width: 64, height: 69 },
			imageOption: { offsetX: 27, offsetY: 69 },
		};
		addMarker(options);
	};

	return { addMarkerRecommandation, handleRemoveMarker };
};
