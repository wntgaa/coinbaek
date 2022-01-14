import express from "express";
import res from "express/lib/response";

const PORT = 4000;


const app = express();

const gossipMiddleware = (req, res, next) => {
  console.log(`사용자가 ${req.url} 로 이동중입니다.🚌🚌🚌`);
  next();
}

const handleHome = (req, res) => {
  return res.send("<h1>아이우에오</h1>");
}

const handleLogin = (req, res) => {
  res.send("여기에 로그인해보세요");
}

app.get("/",gossipMiddleware,handleHome);
app.get("/login", handleLogin);
const handleListening = () =>
  console.log(`✅ 서버가  http://localhost:${PORT} 에서 듣고있습니다 ᕕ( ⁰ ▽ ⁰ )ᕗ `);

app.listen(PORT, handleListening);

