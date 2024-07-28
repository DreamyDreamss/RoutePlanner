'use client';
import styled from 'styled-components';
import { mobileScreen } from '@utils/commonData';

export const IntersectionComponentWrapper = styled.div<{ width: string; height: string; $minWidth: string; $minHeight: string }>`
	min-width: ${({ width }) => width};
	max-width: ${({ width }) => width};
	min-height: ${({ height }) => height};
	max-height: ${({ height }) => height};
	@media (max-width: ${mobileScreen}) {
		min-width: ${({ $minWidth }) => $minWidth};
		max-width: ${({ $minWidth }) => $minWidth};
		min-height: ${({ $minHeight }) => $minHeight};
		max-height: ${({ $minHeight }) => $minHeight};
	}
`;
