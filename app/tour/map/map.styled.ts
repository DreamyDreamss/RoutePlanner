'use client';
import styled from 'styled-components';

const BottomNavHeight = '56px';
export const MapContainer = styled.div`
	position: fixed;
	top: 0;
	width: 100%;
	height: calc(100vh - ${BottomNavHeight});
`;

export const MapBox = styled.div`
	width: 100%;
	height: 100%;
`;
