'use client';
import styled from 'styled-components';
import { mobileScreen } from '@utils/commonData';

export const FooterCustom = styled.footer`
	position: relative;
	overflow: hidden;
	background-color: #222227;
`;

export const FooterInner = styled.div`
	height: 50px;

	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;

	@media (max-width: ${mobileScreen}) {
	}
`;

export const TypographRight = styled.div`
	font-size: 14px;
	color: rgba(255, 255, 255, 0.5);
	white-space: inherit;

	@media (max-width: ${mobileScreen}) {
		white-space: pre-wrap;
	}
`;
