import express from 'express'
import { imageBGRemoval, imageCropFace, uploadImage } from '../controllers/images.controller.js'
import uploadImageMiddleware from '../middlewares/uploadImage.middleware.js'

const imagesRouter = express.Router()

imagesRouter.route('/upload').post(uploadImageMiddleware, uploadImage)
imagesRouter.route('/crop_face').get(imageCropFace)
imagesRouter.route('/remove_bg').get(imageBGRemoval)

export default imagesRouter