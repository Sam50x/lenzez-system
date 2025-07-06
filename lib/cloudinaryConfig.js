import { v2 as cloudinary } from "cloudinary";

const {
    NODE_PUBLIC_CLOUD_NAME,
    NODE_PUBLIC_API_KEY,
    NODE_PUBLIC_API_SECRET
} = process.env

const cloudinaryConfig = () => {
        cloudinary.config({
            cloud_name: NODE_PUBLIC_CLOUD_NAME,
            api_key: NODE_PUBLIC_API_KEY,
            api_secret: NODE_PUBLIC_API_SECRET,
            secure: true,
        })

        console.log('Cloudinary is on')
}

export default cloudinaryConfig