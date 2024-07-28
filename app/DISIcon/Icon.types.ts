import { FunctionComponent, SVGProps } from 'react';

export interface IIconStyled {
	width?: string | number;
	height?: string | number;
	color?: string;
}

export interface IIcon extends IIconStyled {
	icon: string;
}

export type IconsMap = { [x: string]: FunctionComponent<SVGProps<SVGSVGElement>> };
