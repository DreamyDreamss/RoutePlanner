'use client';
import { useRouter } from 'next/navigation';

export default function NotFound() {
	const router = useRouter();

	return (
		<div style={{ background: 'black', height: '100vh' }}>
			<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
				<div>
					<h2 style={{ color: 'white' }}>This page could not be found</h2>
				</div>
				<button style={{ color: 'white', background: 'black' }} onClick={() => router.back()}>
					&larr; go back
				</button>
			</div>
		</div>
	);
}
