import express from 'express'
import { imageBGRemoval, imageBGReplacement, imageCrop, imageEnhance, imageGenerativeFill, imageObjectRemoval, imageObjectReplacement, uploadImage } from '../controllers/images.controller.js'
import uploadImageMiddleware from '../middlewares/uploadImage.middleware.js'

const imagesRouter = express.Router()

imagesRouter.route('/upload').post(uploadImageMiddleware, uploadImage)
imagesRouter.route('/remove_bg').get(imageBGRemoval)
imagesRouter.route('/remove_obj').get(imageObjectRemoval)
imagesRouter.route('/replace_bg').get(imageBGReplacement)
imagesRouter.route('/replace_obj').get(imageObjectReplacement)
imagesRouter.route('/crop').get(imageCrop)
imagesRouter.route('/gen_fill').get(imageGenerativeFill)
imagesRouter.route('/enhance').get(imageEnhance)

export default imagesRouter