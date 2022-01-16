import express from "express";
import morgan from "morgan";

const PORT = 4000;
const logalMiddleware = morgan("dev");
const app = express();

const logger = (req, res, next) => {
  console.log(`사용자가 ${req.url} 로 이동중입니다.🚌🚌🚌`);
  next();
}

const privateMiddleware =(req, res, next) =>{
  const url = req.url;
  if(url === "/protected"){
       return res.send("<h1>🚷🚷접근할수 없습니다.🚷🚷</h1>");
  }
  next();
}

const handleHome = (req, res) => {
  return res.send("<h1>아이우에오</h1>");
}

const handleLogin = (req, res) => {
  res.send("여기에 로그인해보세요");
}


const handleProtected = (req, res) => {
  return res.send("private에 오신것을 환영합니다.")
}

app.use(logalMiddleware);
app.get("/",logger,handleHome);
app.get("/login", handleLogin);



const handleListening = () =>
  console.log(`✅ 서버가  http://localhost:${PORT} 에서 듣고있습니다 ᕕ( ⁰ ▽ ⁰ )ᕗ `);

app.listen(PORT, handleListening);

