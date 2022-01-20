import express from "express";

const videoRouter = express.Router();

const handleWatchVideo = (req, res) => res.send("비디오 시청페이지입니다.");

videoRouter.get("/watch", handleWatchVideo);

export default videoRouter;