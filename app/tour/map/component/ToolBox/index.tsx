'use client';
import { MouseEvent, useState } from 'react';
import { ToolBoxButton, ToolBoxInner, ToolBoxWrapper } from './ToolBox.styled';
import TourOutlinedIcon from '@mui/icons-material/TourOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import RouteOutlinedIcon from '@mui/icons-material/RouteOutlined';
import { useRecommend } from '../../hooks/useRecommend';

const ToolBox = () => {
	const [selected, setSelected] = useState('');
	const { addMarkerRecommandation } = useRecommend();

	const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
		const { value } = e.currentTarget;
		setSelected(selected === value ? '' : value);
	};

	const handleRecommendation = (e: MouseEvent<HTMLButtonElement>) => {
		handleClick(e);
		addMarkerRecommandation();
	};

	return (
		<ToolBoxWrapper>
			<ToolBoxInner>
				<ToolBoxButton aria-label="관광지 추천" value="recommendation" $isSelected={selected === 'recommendation'} onClick={handleRecommendation}>
					<TourOutlinedIcon />
					추천
				</ToolBoxButton>
				<ToolBoxButton aria-label="내 스크랩" value="myScrap" $isSelected={selected === 'myScrap'} onClick={handleClick}>
					<StarOutlinedIcon />
					저장
				</ToolBoxButton>
				<ToolBoxButton aria-label="경로보기" value="viewRoute" $isSelected={selected === 'viewRoute'} onClick={handleClick}>
					<RouteOutlinedIcon />
					경로
				</ToolBoxButton>
			</ToolBoxInner>
		</ToolBoxWrapper>
	);
};

export default ToolBox;
