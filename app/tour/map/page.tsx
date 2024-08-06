'use client';
import React from 'react';
import { MapProvider } from '@/app/tour/map/context/kakaoMap';
import ToolBox from '@/app/tour/map/component/ToolBox';
import SearchBar from '@/app/tour/map/component/SearchBar';
import { MapContainer, MapBox } from './map.styled';

const MainMap = async () => {
	return (
		<MapProvider>
			<MapContainer>
				<MapBox id="map" />
			</MapContainer>
			<SearchBar />
			<ToolBox />
		</MapProvider>
	);
};

export default MainMap;
