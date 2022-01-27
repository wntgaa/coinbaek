import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;
const app = express();
const logger = morgan("dev");

console.log(process.cwd());

app.set("view engine", "pug")
app.set("views", process.cwd() + "/src/views");
app.use(logger)
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);


const move = (req, res, next) => {
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

app.use(move);
app.use(privateMiddleware);

const handleListening = () =>
  console.log(`✅ 서버가  http://localhost:${PORT} 에서 듣고있습니다 ᕕ( ⁰ ▽ ⁰ )ᕗ `);

app.listen(PORT, handleListening);

