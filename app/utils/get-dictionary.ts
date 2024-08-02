// import 'server-only';
import { menuType } from './get-dictionary.types';

const pageMenu: menuType = {
	board: '게시판',
	map: '지도',
	'my-page': '마이페이지',
};

const menu: menuType = {
	touristRecommendation: '관광지 추천',
	myScrap: '내 스크랩',
	viewRoute: '경로보기',
};

export const getMenu = () => menu;
export const getPageMenu = () => pageMenu;
