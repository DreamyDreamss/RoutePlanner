'use client';
import React, { FunctionComponent } from 'react';
import { IconBlock } from './Icon.styled';
import { IconsMap, IIcon } from './Icon.types';

import LogoIcon from '@/app/DISIcon/icons/logo.svg';
import icoLogoIcon from '@/app/DISIcon/icons/icoLogo.svg';
import navigationIcon from '@/app/DISIcon/icons/navigation.svg';
import downloadIcon from '@/app/DISIcon/icons/download.svg';
import downloadCircleIcon from '@/app/DISIcon/icons/downloadCircle.svg';
import closeIcon from '@/app/DISIcon/icons/close.svg';
import preveousCircleIcon from '@/app/DISIcon/icons/preveousCircle.svg';
import nextCircleIcon from '@/app/DISIcon/icons/nextCircle.svg';
import listCircleIcon from '@/app/DISIcon/icons/listCircle.svg';
import mailIcon from '@/app/DISIcon/icons/mail.svg';
import newslinkIcon from '@/app/DISIcon/icons/news-link.svg';

const Icons = {
	logo: () => LogoIcon(),
	icoLogo: () => icoLogoIcon(),
	navigationBar: () => navigationIcon(),
	download: () => downloadIcon(),
	downloadCircle: () => downloadCircleIcon(),
	close: () => closeIcon(),
	preveousCircle: () => preveousCircleIcon(),
	nextCircle: () => nextCircleIcon(),
	listCircle: () => listCircleIcon(),
	mail: () => mailIcon(),
	'news-link': () => newslinkIcon(),
};

export const DISIcon = ({ icon, width, height, color }: IIcon) => {
	const IconMap: IconsMap = Icons;

	if (!IconMap[icon]) return null;
	const IconComponent: FunctionComponent = IconMap[icon];

	return (
		<IconBlock width={width} height={height} color={color}>
			<IconComponent />
		</IconBlock>
	);
};

export default DISIcon;
