declare global {
	interface Window {
		initMap: () => void; // google initMap
		google: any;
	}
}

export {};
