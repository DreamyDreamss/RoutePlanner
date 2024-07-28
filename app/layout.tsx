import type { Metadata } from 'next';
import StyledComponentsRegistry from './utils/registry';
import '@/app/globals.css';

export const metadata: Metadata = {
	title: '',
	description: '',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ko">
			<head>
				<link rel="icon" href="/favicon.ico" />
			</head>
			<body>
				<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
			</body>
		</html>
	);
}
