// server/routes/apiRoutes.js

const express = require('express');
const { getRecommendNearbySpots } = require("../services/recommendService");
const router = express.Router();

/**
 * GET /recommend-nearby-spots
 *
 * @author 이주형
 * @query {number} mapX - (선택) GPS X좌표 (경도), 기본값: 126.981611
 * @query {number} mapY - (선택) GPS Y좌표 (위도), 기본값: 37.568477
 * @query {number} pageNo - (선택) 페이지 번호, 기본값: 1
 * @query {number} numOfRows - (선택) 한 페이지당 결과 수, 기본값: 10
 *
 * @example http://localhost:3000/api/recommend-nearby-spots?mapX=127.123&mapY=37.456
 * @returns {Object[]} 추천 관광지 정보 배열을 반환합니다.
 */
router.get('/recommend-nearby-spots', async (req, res) => {

  try {
    const { mapX, mapY, pageNo = 1, numOfRows = 10 } = req.query; // mapX와 mapY가 제공되지 않았을 경우 기본값 설정 (옵션)
    const defaultMapX = 126.981611;
    const defaultMapY = 37.568477;
    const spots = await getRecommendNearbySpots(
      mapX || defaultMapX,
      mapY || defaultMapY,
      pageNo,
      numOfRows
    );

    res.json(spots);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;