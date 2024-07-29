import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Footer from '@/app/component/Footer';
import Navigation from '@/app/component/Navigation';
import { MapContainer } from './map.styled';

const KakaoMap = dynamic(() => import('@component/kakaoMap'), { ssr: false });

export function generateMetadata(): Metadata {
	return {
		title: '',
		description: '',
		keywords: '',
		openGraph: {
			type: 'website',
			url: 'https://',
			title: '',
			description: '',
		},
	};
}

export default function Root({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<Navigation />
			<MapContainer>
				<KakaoMap />
			</MapContainer>
			{children}
			<Footer />
		</div>
	);
}
