const express = require('express');
const supabase = require('../../utils/supabaseClient'); // Supabase 클라이언트 임포트
const router = express.Router();

router.get('/posts', async (req, res) => {
  console.log("test");
  const { data, error } = await supabase.from('bd_posts').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

module.exports = router;