'use client';
import styled, { css } from 'styled-components';
import { mobileScreen } from '@utils/commonData';

export const Header = styled.header<{ $scroll: boolean }>`
	position: fixed;
	z-index: 4;
	top: 0px;
	left: 0px;
	right: 0px;
	width: 100%;
	min-width: 100%;

	display: flex;
	-webkit-box-pack: center;
	justify-content: center;
	-webkit-box-align: center;
	align-items: center;
	flex-direction: column;
	color: #fff;

	background: rgba(22, 22, 22, 0.93);
`;

export const HeaderInner = styled.div`
	position: relative;
	max-width: 1280px;
	width: 100%;
	height: 100px;
	display: flex;
	-webkit-box-align: center;
	align-items: center;
	-webkit-box-pack: justify;
	justify-content: space-between;
`;

export const StyledNav = styled.nav`
	width: 620px;
	display: flex;
	flex-direction: row;
	align-items: center;

	ul {
		display: flex;
		flex-direction: row;
		align-items: center;

		margin-right: 10px;
	}
`;

export const ItemMenuBar = styled.li<{ $weight: string }>`
	list-style-type: none;
	white-space: nowrap;
	margin-right: 50px;
	color: #fff;
	font-size: 16px;
	font-weight: ${props => props.$weight};
`;
