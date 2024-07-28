import { Metadata } from 'next';
import Footer from '@/app/component/Footer';
import Navigation from '@/app/component/Navigation';

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
		<>
			<Navigation />
			<div style={{ marginTop: '100px', height: '600px', backgroundColor: '#86bad8' }}>{children}</div>
			<Footer />
		</>
	);
}
