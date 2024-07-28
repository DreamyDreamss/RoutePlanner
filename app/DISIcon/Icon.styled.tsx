import styled from 'styled-components';
import { IIconStyled } from './Icon.types';

export const IconBlock = styled.span<IIconStyled>`
	display: inline-block;
	vertical-align: top;
	box-sizing: border-box;
	${({ width }) => width && `width: ${width}px;`}
	${({ height }) => height && `height: ${height}px;`}
	& > svg {
		vertical-align: top;
		${({ width }) => width && `width: ${width}px;`}
		${({ height }) => height && `height: ${height}px;`}
    	fill: ${({ color }) => (color ? color : '#444')}
	}
`;
