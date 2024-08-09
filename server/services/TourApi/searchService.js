// 키워드 검색 조회 함수
const axios = require("axios");
const baseURL = process.env.TourAPI_BASE_URL;
const serviceKey = process.env.TourAPI_SERVICE_KEY;
const getSearchResults = async (params) => {
  try {
    // 요청할 필수 파라미터 설정
    const defaultParams = {
        numOfRows: params.numOfRows || 10,
        pageNo: params.pageNo || 1,
        MobileOS: "ETC",
        MobileApp: "AppTest",
        serviceKey,
        _type: "json",
        listYN: "Y",
        arrange: params.arrange || "A",
        contentTypeId: params.contentTypeId,
        areaCode: params.areaCode,
        sigunguCode: params.sigunguCode,
        cat1: params.cat1,
        cat2: params.cat2,
        cat3: params.cat3,
        keyword: params.keyword
    };

    // API 호출
    const response = await axios.get(`${baseURL}/searchKeyword1`, { params: defaultParams });
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

module.exports = { getSearchResults};
