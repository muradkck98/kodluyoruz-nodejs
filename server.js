const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
  if ((ctx.url === "/") && (ctx.status = 200)) {
    ctx.body = "<h1>Index Safyası</h1>";
  }
  else if ((ctx.url === "/hakkimda") && (ctx.status = 200)) {
    ctx.body = "<h1>Hakkimda Safyası</h1>";
  }
  else if ((ctx.url === "/iletisim") && (ctx.status = 200)) {
    ctx.body = "<h1><h1>Iletisim Safyası</h1></h1>";
  }
  else{
    ctx.status = 404;
    ctx.body = "<h1>404 Sayfa Bulunamadı.</h1>.";
  }
});

app.listen(3000);