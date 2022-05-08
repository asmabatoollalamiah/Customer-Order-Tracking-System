const { createProxyMiddleWare } = require("http-proxy-middleware");

module.exports = app => {
    app.use(
        createProxyMiddleWare("customers", {
            target: "http://localhost:8089/",
            changeOrigin: true
        })
    );
    
}