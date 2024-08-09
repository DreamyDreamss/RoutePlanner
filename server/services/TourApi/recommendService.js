// server/services/recommendService.js
const axios = require("axios");

const baseURL = process.env.TourAPI_BASE_URL;
const serviceKey = process.env.TourAPI_SERVICE_KEY;
const getRecommendNearbySpots = async (mapX, mapY,pageNo,numOfRows) => {
  try {
    // 요청할 파라미터 설정
    const params = {
      numOfRows: numOfRows,
      pageNo: pageNo,
      MobileOS: "ETC",
      MobileApp: "AppTest",
      _type: "json",
      listYN: "Y",
      arrange: "A",
      mapX: mapX,
      mapY: mapY,
      radius: 10000,
      contentTypeId: 15,
      serviceKey: serviceKey
    };
    // API 호출
    const response = await axios.get(`${baseURL}/locationBasedList1`, { params });
    return response.data;
  } catch (error) {
    // 에러 핸들링
    if (error.response) {
      // 서버가 응답을 반환한 경우
      console.error(`HTTP ${error.response.status}: ${error.response.statusText}`);
      console.error(`Details: ${JSON.stringify(error.response.data)}`);
    } else if (error.request) {
      // 요청이 만들어졌으나 응답을 받지 못한 경우
      console.error("No response received:", error.request);
    } else {
      // 요청 설정 중에 에러가 발생한 경우
      console.error("Error in request setup:", error.message);
    }
    throw new Error("Error fetching recommended nearby spots from external API");
  }
};
module.exports = { getRecommendNearbySpots};