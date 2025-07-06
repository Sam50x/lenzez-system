import express from 'express'
import { imageBGRemoval, imageCrop, imageGenerativeFill, imageUpscale, uploadImage } from '../controllers/images.controller.js'
import uploadImageMiddleware from '../middlewares/uploadImage.middleware.js'

const imagesRouter = express.Router()

imagesRouter.route('/upload').post(uploadImageMiddleware, uploadImage)
imagesRouter.route('/remove_bg').get(imageBGRemoval)
imagesRouter.route('/crop').get(imageCrop)
imagesRouter.route('/gen_fill').get(imageGenerativeFill)
imagesRouter.route('/upscale').get(imageUpscale)

export default imagesRouter