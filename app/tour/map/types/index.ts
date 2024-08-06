'use client';
import { Dispatch, SetStateAction } from 'react';

export interface MapContextType {
	map: any;
	setMap: Dispatch<SetStateAction<any>>;
	markers: any;
}
export interface MarkerPosition {
	title: string;
	latlng: { lat: number; lng: number };
}

export interface MarkerOptions {
	position: MarkerPosition[];
	imageSrc?: string;
	imageSize?: { width: number; height: number };
	imageOption?: { offsetX: number; offsetY: number };
}
