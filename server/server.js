// server/server.js
const express = require("express");
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const next = require("next");
const apiRoutes = require("./routes/apiRoutes");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

// Swagger 설정
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API with Swagger',
      version: '1.0.0',
      description: 'A simple CRUD API application made with Express and documented with Swagger',
    },
  },
  apis: ['./server/routes/**/*.js'], // Swagger가 API를 찾을 경로
};
const specs = swaggerJsdoc(options);



app.prepare().then(() => {
  const server = express();
  // API 라우터 설정
  server.use(express.json()); // JSON 형식의 요청 본문을 파싱
  server.use(express.urlencoded({ extended: true })); // URL-encoded 형식의 요청 본문을 파싱

  server.use("/api", apiRoutes);
  server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
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
