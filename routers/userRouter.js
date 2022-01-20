import express from "express";

const userRouter = express.Router();

const handleEditUser = (req, res) => res.send("사용자 페이지입니다.");

userRouter.get("/edit", handleEditUser);

export default userRouter;