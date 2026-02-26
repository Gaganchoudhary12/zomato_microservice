import { Router } from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const router = Router();

router.use(
  "/",
  createProxyMiddleware({
    target: "http://localhost:4002",
    changeOrigin: true,
    pathRewrite: {
      "^/": "/restaurants",
    },
  })
);

export default router;
