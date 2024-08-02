import { Metadata } from 'next';
import Footer from '@/app/component/Footer';

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
			{children}
			<Footer />
		</>
	);
}
