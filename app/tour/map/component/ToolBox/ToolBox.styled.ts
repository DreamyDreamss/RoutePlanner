'use client';
import styled, { css } from 'styled-components';
import { mobileScreen } from '@utils/commonData';

export const ToolBoxWrapper = styled.div`
	position: absolute;
	right: 15px;
	top: 127px;
`;

export const ToolBoxInner = styled.div`
	display: flex;
	flex-direction: column;
	width: 44px;
	background: #ffffff;
	border: 1px solid #00000033;
	border-radius: 4px;
	box-shadow: #0000001a 0px 1px 3px 0px;
`;

export const ToolBoxButton = styled.button<{ $isSelected: boolean }>`
	display: flex;
	flex-direction: column;
	align-items: center;

	padding: 4px;
	background: #fff;
	font-size: 12px;

	border-bottom: 1px solid #00000033;
	gap: 4px;

	${({ $isSelected }) => $isSelected && 'color: var(--u-primary-color)'}
`;
