// server/server.js
const express = require("express");
const next = require("next");
const apiRoutes = require("./routes/apiRoutes");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // API 라우터 설정
  server.use("/api", apiRoutes);

  // // Next.js 요청 처리
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 3000;
  server.listen(port, (err) => {

    if (err) throw err;
    console.log(`Server running on http://localhost:${port}`);
  });
}).catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});
