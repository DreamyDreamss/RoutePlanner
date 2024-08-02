'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Home = () => {
	const router = useRouter();

	useEffect(() => {
		router.push(`tour/map`);
	}, [router]);

	return <main></main>;
};
export default Home;
