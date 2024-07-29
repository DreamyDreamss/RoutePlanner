// import 'server-only';
import { menuType } from './get-dictionary.types';

const menu: menuType = {
	touristRecommendation: '관광지 추천',
	myScrap: '내 스크랩',
	viewRoute: '경로보기',
};

export const getMenu = () => menu;
