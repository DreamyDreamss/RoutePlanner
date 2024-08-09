const axios = require("axios");
const baseURL = process.env.TourAPI_BASE_URL;
const serviceKey = process.env.TourAPI_SERVICE_KEY;
const getAreaBaseInfo = async (numOfRows = 10, pageNo = 1, areaCode, sigunguCode, cat1, cat2, cat3) => {
  try {
    // 요청할 필수 파라미터 설정
    const params = {
      numOfRows,
      pageNo,
      MobileOS: "ETC",
      MobileApp: "AppTest",
      serviceKey,
      _type: "json",
      listYN: "Y",
      areaCode,
      sigunguCode,
      cat1,
      cat2,
      cat3
    };
    console.log(params);
    // API 호출
    const response = await axios.get(`${baseURL}/areaBasedList1`, { params });
    return response.data;
  } catch (error) {
    // 에러 핸들링
    if (error.response) {
      console.error(`HTTP ${error.response.status}: ${error.response.statusText}`);
      console.error(`Details: ${JSON.stringify(error.response.data)}`);
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Error in request setup:", error.message);
    }
    throw new Error("Error fetching search results from external API");
  }
};

module.exports = { getAreaBaseInfo};
