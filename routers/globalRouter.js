import express from "express";

const globalRouter = express.Router(); 

const handleHome = (req, res) => res.send("HomePage입니다.");

globalRouter.get("/",handleHome);

export default globalRouter;