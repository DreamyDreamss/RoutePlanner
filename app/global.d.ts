declare global {
	interface Window {
		initMap: () => void; // kakao initMap
		kakao: any;
	}
}

export {};
