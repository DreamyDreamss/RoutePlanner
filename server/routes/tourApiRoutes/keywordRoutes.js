const express = require('express');
const { getSearchResults } = require('../../services/TourApi/searchService');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: 관광공사API
 *     description: Tourism APIs provided by the corporation
 */

/**
 * @swagger
 * /api/search-keyword:
 *   get:
 *     summary: Search for keywords
 *     tags: [관광공사API]
 *     parameters:
 *       - in: query
 *         name: numOfRows
 *         schema:
 *           type: number
 *         required: false
 *         description: Number of rows per page
 *         default: 10
 *       - in: query
 *         name: pageNo
 *         schema:
 *           type: number
 *         required: false
 *         description: Page number
 *         default: 1
 *       - in: query
 *         name: arrange
 *         schema:
 *           type: string
 *         required: false
 *         description: Arrange order
 *       - in: query
 *         name: contentTypeId
 *         schema:
 *           type: string
 *         required: false
 *         description: Content type ID
 *       - in: query
 *         name: areaCode
 *         schema:
 *           type: string
 *         required: false
 *         description: Area code
 *       - in: query
 *         name: sigunguCode
 *         schema:
 *           type: string
 *         required: false
 *         description: Sigungu code
 *       - in: query
 *         name: cat1
 *         schema:
 *           type: string
 *         required: false
 *         description: Category 1 code
 *       - in: query
 *         name: cat2
 *         schema:
 *           type: string
 *         required: false
 *         description: Category 2 code
 *       - in: query
 *         name: cat3
 *         schema:
 *           type: string
 *         required: false
 *         description: Category 3 code
 *       - in: query
 *         name: keyword
 *         schema:
 *           type: string
 *         required: true
 *         description: Keyword to search for
 *     responses:
 *       200:
 *         description: A list of search results
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 response:
 *                   type: object
 *                   properties:
 *                     header:
 *                       type: object
 *                       properties:
 *                         resultCode:
 *                           type: string
 *                           description: Result code
 *                         resultMsg:
 *                           type: string
 *                           description: Result message
 *                     body:
 *                       type: object
 *                       properties:
 *                         items:
 *                           type: object
 *                           properties:
 *                             item:
 *                               type: array
 *                               items:
 *                                 type: object
 *                                 properties:
 *                                   addr1:
 *                                     type: string
 *                                     description: Address line 1
 *                                   addr2:
 *                                     type: string
 *                                     description: Address line 2
 *                                   areacode:
 *                                     type: string
 *                                     description: Area code
 *                                   booktour:
 *                                     type: string
 *                                     description: Book tour
 *                                   cat1:
 *                                     type: string
 *                                     description: Category 1 code
 *                                   cat2:
 *                                     type: string
 *                                     description: Category 2 code
 *                                   cat3:
 *                                     type: string
 *                                     description: Category 3 code
 *                                   contentid:
 *                                     type: string
 *                                     description: Content ID
 *                                   contenttypeid:
 *                                     type: string
 *                                     description: Content type ID
 *                                   createdtime:
 *                                     type: string
 *                                     description: Created time
 *                                   firstimage:
 *                                     type: string
 *                                     description: First image
 *                                   firstimage2:
 *                                     type: string
 *                                     description: Second image
 *                                   cpyrhtDivCd:
 *                                     type: string
 *                                     description: Copyright division code
 *                                   mapx:
 *                                     type: string
 *                                     description: Map X coordinate (longitude)
 *                                   mapy:
 *                                     type: string
 *                                     description: Map Y coordinate (latitude)
 *                                   mlevel:
 *                                     type: string
 *                                     description: Map level
 *                                   modifiedtime:
 *                                     type: string
 *                                     description: Modified time
 *                                   sigungucode:
 *                                     type: string
 *                                     description: Sigungu code
 *                                   tel:
 *                                     type: string
 *                                     description: Telephone
 *                                   title:
 *                                     type: string
 *                                     description: Title
 *                                   zipcode:
 *                                     type: string
 *                                     description: Zipcode
 *       500:
 *         description: Error fetching search results
 */
router.get('/search-keyword', async (req, res) => {
  const queryParameters = {
    numOfRows: req.query.numOfRows,
    pageNo: req.query.pageNo,
    arrange: req.query.arrange,
    contentTypeId: req.query.contentTypeId,
    areaCode: req.query.areaCode,
    sigunguCode: req.query.sigunguCode,
    cat1: req.query.cat1,
    cat2: req.query.cat2,
    cat3: req.query.cat3,
    keyword: req.query.keyword
  };
  try {
    const data = await getSearchResults(queryParameters);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;