import { createProxyMiddleware } from "http-proxy-middleware";

const target = process.env.ORDER_SERVICE_URL || "http://localhost:4003";

const orderProxy = createProxyMiddleware({
  target: `${target}/orders`,
  changeOrigin: true,
  pathRewrite: {
    '^/orders': '/orders'
  }
});

export default orderProxy;
