import { Router } from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const router = Router();

const target = process.env.RESTAURANT_SERVICE_URL || "http://localhost:4002";

router.use(
  "/",
  createProxyMiddleware({
    target: `${target}/restaurants`,
    changeOrigin: true,
    pathRewrite: {
      "^/restaurants": "/restaurants",
    },
  })
);

export default router;
