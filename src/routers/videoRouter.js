import express from "express";
import { see } from "../controllers/videoControllers";
import { edit } from "../controllers/videoControllers";
import {upload, deleteVideo} from "../controllers/videoControllers"


const videoRouter = express.Router();


videoRouter.get("/upload", upload);
videoRouter.get("/:id", see);
videoRouter.get("/:id/edit", edit);
videoRouter.get("/:id/delete", deleteVideo);



export default videoRouter;