import React, { createContext, useState, useEffect, Dispatch, SetStateAction } from 'react';
import { MapContextType } from '@/app/tour/map/types';
import SlidePanel from '../../component/slide/slidePanel';


export const MapContext = createContext<MapContextType | undefined>(undefined);

export const MapProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [map, setMap] = useState<any>(null);
	const markers: any = [];
	// 슬라이드를 위한 usestate
	const [isSlidePanelVisible, setIsSlidePanelVisible] = useState<boolean>(false);
 	const [slidePanelContent, setSlidePanelContent] = useState<React.ReactNode>(null);

	useEffect(() => {
		const script = document.createElement('script');
		script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAPS_API_KEY}&autoload=false`;
		script.async = true;
		document.head.appendChild(script);

		script.onload = () => {
			if (window.kakao && window.kakao.maps) {
				window.kakao.maps.load(() => {
					const mapContainer = document.getElementById('map');
					const mapOption = {
						center: new window.kakao.maps.LatLng(33.450701, 126.570677),
						level: 3,
					};
					const mapInstance = new window.kakao.maps.Map(mapContainer, mapOption);
					setMap(mapInstance);
				});
			} else {
				console.error('Kakao Maps API가 로드되지 않았습니다.');
			}
		};

		return () => {
			document.head.removeChild(script);
		};
	}, [setMap]);

	const openSlidePanel = (content: React.ReactNode) => {
		setSlidePanelContent(content);
		setIsSlidePanelVisible(true);
	  };
	
	  const closeSlidePanel = () => {
		setIsSlidePanelVisible(false);
		setSlidePanelContent(null);
	  };

	return <MapContext.Provider value={{
        map,
        setMap,
        markers,
      }}>{children}
	<SlidePanel
        isVisible={isSlidePanelVisible}
        content={slidePanelContent}
        onClose={closeSlidePanel}
      />
	  </MapContext.Provider>;
};
