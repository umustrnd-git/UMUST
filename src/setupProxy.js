const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://eb-umust.umust302.shop',
            changeOrigin: true,
        })
    );
};