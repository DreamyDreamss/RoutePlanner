'use client';
import React, { useEffect, useRef, useState } from 'react';
import { IntersectionComponentWrapper } from './intersection.styled';

const IntersectionComponent = ({
	children,
	width,
	height,
	minWidth = width,
	minHeight = height,
	threshold = 1,
	rootMargin = '10px',
}: {
	children: React.ReactElement;
	width: string;
	height: string;
	minWidth?: string;
	minHeight?: string;
	threshold?: number;
	rootMargin?: string;
}) => {
	const observerRef = useRef<HTMLInputElement>(null);
	const [isIntersection, setIsIntersection] = useState(false);
	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				setIsIntersection(entries[0].isIntersecting);
			},
			{ threshold, rootMargin },
		);
		observerRef.current && observer.observe(observerRef.current);

		return () => observer.disconnect();
	}, [observerRef]);

	return (
		<IntersectionComponentWrapper width={width} height={height} $minWidth={minWidth} $minHeight={minHeight} ref={observerRef}>
			{isIntersection && children}
		</IntersectionComponentWrapper>
	);
};

export default IntersectionComponent;
