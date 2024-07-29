'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Header, HeaderInner, StyledNav, ItemMenuBar } from './navigation.styled';
import { getMenu } from '@/app/utils/get-dictionary';
import DISIcon from '@/app/DISIcon';
import { useBodyScrollLock } from '@/app/hooks/useBodyScrollLock';

const Navigation = () => {
	const menuList = getMenu();
	const currentPageName = usePathname().split('/')[2];

	const [scroll, setScroll] = useState(false);
	const [openNavBar, setOpenNavBar] = useState(false);
	const { lockScroll, openScroll } = useBodyScrollLock();

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll); //clean up
		};
	}, []);

	const handleScroll = () => setScroll(window.scrollY > 0 ? true : false);

	const openMobileNavBar = () => {
		openNavBar ? openScroll() : lockScroll();
		setOpenNavBar(prev => !prev);
	};

	return (
		<Header $scroll={scroll}>
			<HeaderInner>
				<StyledNav>
					<ul>
						{Object.keys(menuList).map(name => (
							<Link key={name} target={'_self'} href={`/map/${name}`} passHref>
								<ItemMenuBar $selected={currentPageName === name}>{menuList[name]}</ItemMenuBar>
							</Link>
						))}
					</ul>
				</StyledNav>
			</HeaderInner>
		</Header>
	);
};

export default Navigation;
