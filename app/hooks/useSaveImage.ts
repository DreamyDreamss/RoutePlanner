export function useSaveImage() {
	const saveImageToGallery = ({ url, fileName }: { url: string; fileName: string }) => {
		// 캔버스 엘리먼트 생성
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

		// 새로운 이미지 엘리먼트 생성
		const img = new Image();
		// 이미지 소스 설정
		img.src = url;
		img.crossOrigin = 'Anonymous';

		// 이미지 다운로드가 완료되면 실행될 함수
		img.onload = () => {
			canvas.width = img.width;
			canvas.height = img.height;

			// 캔버스에 이미지 그리기
			ctx.drawImage(img, 0, 0, img.width, img.height);

			const link = document.createElement('a');
			link.href = canvas.toDataURL();
			link.setAttribute('download', `${fileName}.png`);

			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		};
	};

	return { saveImageToGallery };
}
