'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import ToolBox from '@/app/tour/map/component/ToolBox';
import SearchBar from '@/app/tour/map/component/SearchBar';
import { MapContainer } from './map.styled';

const KakaoMap = dynamic(() => import('@component/kakaoMap'), { ssr: false });

const MainMap = async () => {
	return (
		<>
			<MapContainer>
				<KakaoMap />
			</MapContainer>
			<SearchBar />
			<ToolBox />
		</>
	);
};

export default MainMap;
