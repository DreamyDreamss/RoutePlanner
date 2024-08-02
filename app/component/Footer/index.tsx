'use client';
import * as React from 'react';
import { useRouter } from 'next/navigation';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import NoteIcon from '@mui/icons-material/Note';
import { getPageMenu } from '@/app/utils/get-dictionary';

const Footer = () => {
	const pageMenu = getPageMenu();
	const router = useRouter();
	const [value, setValue] = React.useState('map');

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};

	const movePage = (pageName: string) => {
		router.push(pageName);
	};

	const navList = [
		{ value: 'board', icon: <NoteIcon /> },
		{ value: 'map', icon: <LocationOnIcon /> },
		{ value: 'my-page', icon: <ContactPageIcon /> },
	];

	return (
		<BottomNavigation sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} showLabels value={value} onChange={handleChange}>
			{navList.map(item => (
				<BottomNavigationAction key={item.value} label={pageMenu[item.value]} value={item.value} icon={item.icon} onClick={() => movePage(item.value)} />
			))}
		</BottomNavigation>
	);
};

export default Footer;
