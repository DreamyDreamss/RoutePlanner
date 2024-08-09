const express = require('express');
const { getRecommendNearbySpots } = require('../../services/TourApi/recommendService');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: 관광공사API
 *     description: Tourism APIs provided by the corporation
 */

/**
 * @swagger
 * /api/recommend-nearby-spots:
 *   get:
 *     summary: Retrieve nearby recommended spots
 *     tags: [관광공사API]
 *     parameters:
 *       - in: query
 *         name: mapX
 *         schema:
 *           type: number
 *         required: false
 *         description: GPS X coordinate (longitude)
 *         example: 126.981611
 *       - in: query
 *         name: mapY
 *         schema:
 *           type: number
 *         required: false
 *         description: GPS Y coordinate (latitude)
 *         example: 37.568477
 *       - in: query
 *         name: pageNo
 *         schema:
 *           type: number
 *         required: false
 *         description: Page number
 *         default: 1
 *       - in: query
 *         name: numOfRows
 *         schema:
 *           type: number
 *         required: false
 *         description: Number of rows per page
 *         default: 10
 *     responses:
 *       200:
 *         description: A list of recommended spots
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
 *         description: Error fetching recommended spots
 */
router.get('/recommend-nearby-spots', async (req, res) => {
  try {
    const { mapX, mapY, pageNo = 1, numOfRows = 10 } = req.query;
    const defaultMapX = 126.981611;
    const defaultMapY = 37.568477;
    const spots = await getRecommendNearbySpots(mapX || defaultMapX, mapY || defaultMapY, pageNo, numOfRows);
    res.json(spots);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
