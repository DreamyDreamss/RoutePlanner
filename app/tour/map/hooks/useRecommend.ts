import { useMap } from './useMap';

export const useRecommend = () => {
	const { markers, addMarker, handleRemoveMarker } = useMap();

	// 관광지추천 임의마크 생성
	const addMarkerRecommandation = () => {
		if (markers.length > 0) handleRemoveMarker();

		const tempPositions = [
			{
				title: '카카오',
				latlng: { lat: 33.450705, lng: 126.570677 },
			},
			{
				title: '생태연못',
				latlng: { lat: 33.450936, lng: 126.569477 },
			},
			{
				title: '텃밭',
				latlng: { lat: 33.450879, lng: 126.56994 },
			},
			{
				title: '근린공원',
				latlng: { lat: 33.451393, lng: 126.570738 },
			},
		];

		const options = {
			position: tempPositions,
			// imageSrc: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png',
			imageSize: { width: 64, height: 69 },
			imageOption: { offsetX: 27, offsetY: 69 },
		};
		addMarker(options);
	};

	return { addMarkerRecommandation, handleRemoveMarker };
};
