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
	height: 60px;

	display: flex;
	-webkit-box-pack: center;
	justify-content: center;
	-webkit-box-align: center;
	align-items: center;
	flex-direction: column;

	background: transparent;
`;

export const HeaderInner = styled.div`
	position: relative;
	display: flex;
`;

export const StyledNav = styled.nav`
	display: flex;
	flex-direction: row;
	align-items: center;

	ul {
		display: flex;
		flex-direction: row;
		gap: 20px;
	}
`;

export const ItemMenuBar = styled.li<{ $selected: boolean }>`
	display: inline-flex;
	padding: 10px 16px;
	justify-content: center;
	align-self: flex-start;
	flex: 1; /* 동일한 너비를 가지도록 설정 */
	margin: 0 20px; /* 버튼 사이 간격 조정 */
	border-radius: 100px;

	border: 1px solid #000;
	color: ${({ $selected }) => ($selected ? '#fff' : '#000')};
	background: ${({ $selected }) => ($selected ? '#1976d2' : '#fff')};
	font-weight: ${({ $selected }) => ($selected ? '700' : '400')};
	list-style: none; /* li 기본 스타일 제거 */
	text-align: center;
	transition: background-color 0.3s;

	&:hover {
		background: #1976d2;
		color: #fff;
	}
`;
