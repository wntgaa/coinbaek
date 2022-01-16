import express from "express";
import morgan from "morgan";

const PORT = 4000;
const app = express();
const logger = morgan("dev");

app.use(logger);

const globalRouter = express.Router(); 

const handleHome = (req, res) => res.send("HomePage입니다.");

globalRouter.get("/",handleHome);



const userRouter = express.Router();

const handleEditUser = (req, res) => res.send("사용자 페이지입니다.");

userRouter.get("/edit", handleEditUser);



const videoRouter = express.Router();

const handleWatchVideo = (req, res) => res.send("비디오 시청페이지입니다.");

videoRouter.get("/watch", handleWatchVideo);

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

