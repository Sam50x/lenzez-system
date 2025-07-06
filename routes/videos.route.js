import express from 'express'
import uploadVideoMiddleware from '../middlewares/uploadVideo.middleware.js'
import { uploadVideo } from '../controllers/videos.controller.js'

const videosRouter = express.Router()

videosRouter.route('/upload').post(uploadVideoMiddleware, uploadVideo)

export default videosRouter