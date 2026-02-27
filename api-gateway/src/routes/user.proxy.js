import { Router } from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const router = Router();

const target = process.env.USER_SERVICE_URL || "http://localhost:4001";

router.use(
  "/",
  createProxyMiddleware({
    target: `${target}/users`,
    changeOrigin: true,
    pathRewrite: {
      '^/users': '/users'
    }
  })
);

export default router;
