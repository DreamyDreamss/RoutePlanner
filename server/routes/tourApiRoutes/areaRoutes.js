const express = require('express');
const { getAreaBaseInfo } = require('../../services/TourApi/areaBaseListService');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: 관광공사API
 *     description: Tourism APIs provided by the corporation
 */

/**
 * @swagger
 * /api/area:
 *   get:
 *     summary: Get area base information
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
 *     responses:
 *       200:
 *         description: A list of area base information
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
 *         description: Error fetching area base information
 */
router.get('/area', async (req, res) => {
  const { numOfRows = 10, pageNo = 1 } = req.query;
  try {
    const data = await getAreaBaseInfo(numOfRows, pageNo);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;