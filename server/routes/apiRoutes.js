const express = require('express');
const areaRoutes = require('./tourApiRoutes/areaRoutes');
const locationRoutes = require('./tourApiRoutes/locationRoutes');
const keywordRoutes = require('./tourApiRoutes/keywordRoutes');
const postsRoutes = require('./boardApiRoutes/postRoutes')
const authRoutes = require('./memberApiRoutes/authRoutes');

const router = express.Router();

router.use(areaRoutes);
router.use(locationRoutes);
router.use(keywordRoutes);
router.use(postsRoutes);
router.use(authRoutes)


module.exports = router;