import express from 'express'
import uploadVideoMiddleware from '../middlewares/uploadVideo.middleware.js'
import { uploadVideo, videoCrop } from '../controllers/videos.controller.js'

const videosRouter = express.Router()

videosRouter.route('/upload').post(uploadVideoMiddleware, uploadVideo)
videosRouter.route('/crop').get(videoCrop)

export default videosRouter